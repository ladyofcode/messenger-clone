
/**
 * -----------------
 * - Message Event -
 * -----------------
 * 
 * - DESCRIPTION
 * this event gets thrown whenever a message is sent by another user
 * that this user has access to
 * 
 * - SPECIFICS 
 * Name: "message"
 * Data: MessageDTO
 * 
 * - USAGE
 * io.on('message', (message: MessageDTO) => {
 * 	console.log('received a message!!!');
 * })
 */


/**
 * ---------------
 * - Nudge Event -
 * ---------------
 * 
 * - DESCRIPTION
 * After sending a nudge to a group. All users except for the sender will receive this event.
 * 
 * - SPECIFICS 
 * Name: "nudge"
 * Data: { senderId: number }
 * 
 * - USAGE
 * io.on('nudge', (data: { senderId: number }) => {
 * 	console.log('shake that booty');
 * })
 */

/**
 * ----------------------
 * - Start Typing Event -
 * ----------------------
 * 
 * - DESCRIPTION
 * Indicates that a user has started typing in a group.
 * 
 * - SPECIFICS 
 * Name: "start-typing"
 * Data: { senderId: number }
 * 
 * - USAGE
 * io.on('start-typing', (data: { senderId: number }) => {
 * 	console.log('shake that booty');
 * })
 */

/**
 * ----------------------
 * - Stop Typing Event -
 * ----------------------
 * 
 * - DESCRIPTION
 * Indicates that a user has stopped typing in a group.
 * 
 * - SPECIFICS 
 * Name: "stop-typing"
 * Data: { senderId: number }
 * 
 * - USAGE
 * io.on('stop-typing', (data: { senderId: number }) => {
 * 	console.log('shake that booty');
 * })
 */
