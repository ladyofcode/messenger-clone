import socketIo, {waitForConnection} from '../config/socket';

export class WebRTC {

    io?:SocketIOClient.Socket;

    peerConnection= new RTCPeerConnection({iceServers:[{urls:'stun:stun.l.google.com:19302'}]});
    sdpConstraints:RTCOfferOptions = {
        offerToReceiveAudio: true,
        offerToReceiveVideo: true
    };

    constructor(){
        this.init();
    }

    async init(){
        this.io = await waitForConnection();
    }


    setupWebRTC(){
        this.peerConnection.onconnectionstatechange = (event) => {console.info(event)}
        this.peerConnection.oniceconnectionstatechange = (event) => {console.info(event)}
        this.peerConnection.onicegatheringstatechange = (event) => {console.info(event)}

        this.peerConnection.ontrack = (e: RTCTrackEvent)=>{
            //Get the video stream in e.streams
            //Inject into video srcObject
        }

        if(this.io){

            this.peerConnection.onicecandidate = (e: RTCPeerConnectionIceEvent)=>{
                this.io?.send('candidate', e.candidate)
            }

            this.io.on('answer',(data:any)=>{
                this.rtcAnswer(data)
            })
    
            this.io.on('candidate',(data:any)=>{
                this.handleCandidate(data)
            })
    
            this.rtcOffer();

        }
    }

    //outgoing
    async rtcOffer(){
        const offerDescription = await this.peerConnection.createOffer(this.sdpConstraints);
        this.peerConnection.setLocalDescription(offerDescription);

        this.io?.send('offer', offerDescription)
    }

    //incoming
    async rtcAnswer(answer: any){
        const answerDescription = new RTCSessionDescription(answer);
        this.peerConnection.setRemoteDescription(answerDescription);
    }

    //incoming
    async handleCandidate(candidateMessage:any){
        const candidate = new RTCIceCandidate(candidateMessage);
        this.peerConnection.addIceCandidate(candidate);
    }




}