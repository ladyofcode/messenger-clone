
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