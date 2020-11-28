<<<<<<< HEAD

export const MessageResource = {
	all: {
		method: "GET",
		path: (groupId: number) => `/groups/${groupId}/messages`
	},
  create: {
    method: "POST",
    path: () => `/messages`,
    body: (data: CreateMessageDTO) => data
  },
  remove: { 
    method: "DELETE",
    path: (messageId: number) => `/messages/${messageId}`
  }
} 

export interface MessageDTO {
    message: string
    timestamp:number
} 

export interface CreateMessageDTO {
    groupId: number;
    message: string;
}
=======
export interface IMessageDTO {
  id: number;
  message: string;
  displayName: string;
  createdAt: string;
}
>>>>>>> 245021f737870d8bcd17f9cea091d69bf79c0745
