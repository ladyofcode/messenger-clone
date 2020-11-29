import {waitForConnection} from '../config/socket';

export class WebRTC {

    io?:SocketIOClient.Socket;

    peerConnection= new RTCPeerConnection({iceServers:[{urls:'stun:stun.l.google.com:19302'}]});
    sdpConstraints:RTCOfferOptions = {
        offerToReceiveAudio: true,
        offerToReceiveVideo: true
    };

    dataChannel: RTCDataChannel = this.peerConnection.createDataChannel("mydatachannel");

    constructor(){
        this.init();
    }

    async init(){

        const localStream = await navigator.mediaDevices.getUserMedia({video: true, audio: true});
        localStream.getTracks().forEach(track => {
            this.peerConnection.addTrack(track, localStream);
        });

        this.io = await waitForConnection();
        this.setupWebRTC()

    }


    setupWebRTC(){
        //this.peerConnection.onconnectionstatechange = (event) => {console.info('onconnectionstatechange', event)}
        //this.peerConnection.oniceconnectionstatechange = (event) => {console.info('oniceconnectionstatechange',event)}
        //this.peerConnection.onicegatheringstatechange = (event) => {console.info('onicegatheringstatechange',event)}

        this.peerConnection.ontrack = (e: RTCTrackEvent)=>{
            //Get the video stream in e.streams
            //Inject into video srcObject
            console.log("ontrack");
            console.log(e);
            
            const video = document.createElement('video')
            video.srcObject = e.streams[0];
            video.style.position = 'absolute';
            video.style.top = "0";
            video.style.left = "0";
            video.controls = true;
            video.autoplay = true;
            document.body.append(video);
        }
        this.listenRemoteDataChannel();
        this.createDataChannel();
        
        if(this.io){

            this.peerConnection.onicecandidate = (e: RTCPeerConnectionIceEvent)=>{
                //console.log('onicecandidate', e);
                if(e.candidate){
                    this.io?.emit('candidate', e.candidate)
                }
            }

            this.io.on('answer',(data:any)=>{
                this.rtcAnswer(data)
            })
    
            this.io.on('candidate',(data:any)=>{
                this.handleCandidate(data)
            })

        }
    }

    //outgoing
    async rtcOffer(){
        const offerDescription = await this.peerConnection.createOffer(this.sdpConstraints);
        await this.peerConnection.setLocalDescription(offerDescription);
        //console.log('offer',offerDescription);
        this.io?.emit('offer', offerDescription)
    }

    //incoming
    async rtcAnswer(offer: any){
        //console.log('answer', offer);
        const offerDescription = new RTCSessionDescription(offer);
        await this.peerConnection.setRemoteDescription(offerDescription);
        try{
            const answerDescription = await this.peerConnection.createAnswer();
            await this.peerConnection.setLocalDescription(answerDescription);
            this.io?.emit('offer', answerDescription)
        }catch(e){
            return
        }
    }

    //incoming
    async handleCandidate(candidateMessage:any){
        //console.log('candidateMessage',candidateMessage);
        const candidate = new RTCIceCandidate(candidateMessage);
        try{
            await this.peerConnection.addIceCandidate(candidate);
        } catch(e){
            return
        }
    }

    createDataChannel(){
        this.dataChannel = this.peerConnection.createDataChannel("mydatachannel");
        this.dataChannel.onopen = function(e:Event){ 
            console.log("data channel open");
            setInterval(()=>{
                this.send("stuff in channel");
            },1000)
        }
    }

    listenRemoteDataChannel(){
        this.peerConnection.ondatachannel = (e:RTCDataChannelEvent)=>{
            e.channel.onclose = function(e:Event){ console.log("data channel close")};
            e.channel.onmessage = function(e:MessageEvent){ console.log("data channel onmessage", e)}
            e.channel.onerror = function(e:RTCErrorEvent){ console.log("data channel onerror", e)}
        }
    }




}