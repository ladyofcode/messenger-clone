import { UserDTO } from "./user-dto";
import { GroupDTO } from "./group-dto";

export const MessageResource = {
  all: {
    method: "GET",
    path: (groupId: number) => `/groups/${groupId}/messages`,
  },
  create: {
    method: "POST",
    path: (groupId: number) => `/groups/${groupId}/messages`,
    body: (data: CreateMessageDTO) => data,
  },
  remove: {
    method: "DELETE",
    path: (groupId: number, messageId: number) =>
      `/groups/${groupId}/messages/${messageId}`,
  },
};

export interface MessageDTO {
  id: number;
  sender: UserDTO;
  group: GroupDTO;
  content: string;
  createdAt: string;
}

export interface CreateMessageDTO {
  groupId: number;
  message: string;
}
