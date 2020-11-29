/**
 * These are the events that the client can send to the server
 */

export const clientEvents = {

  /**
   * To authenticate yourself within the websocket.
   * You need to create a token at:
   * POST /events/create-token
   * No body parameters are required, you just need to be signed in
   * 
   * Then send this token with an "authenticate" event.
   * 
   * Without this event, the user will not receive any events
   * 
   * @Returns { status: 'success' | 'failed' }
   */
  "authenticate": {
    name: "authenticate",
    data: (token: string) => { token }
  }
  
}