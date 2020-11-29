/**
 * These are the events that the server can send to the client
 */

export interface ISocketEvent<T> {
    event: string
    message: T
}


//Example Event

// export interface NudgeEvent implements ISocketEvent<{id:number}> {
//     event = 'nudge'
//     message = {
//         id
//     }
// }
