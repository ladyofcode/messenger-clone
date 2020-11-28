
export interface IMessageDTO {

    message: string
    timestamp:number
    
} 

export interface CreateMessageDTO {
    groupId: number;
    message: string;
}