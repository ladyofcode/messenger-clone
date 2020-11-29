import { UserDTO } from "./user-dto";
export const groupResource = {
  allMine: {
    method: "GET",
    path: () => `/groups`,
  },
  groupForContactUser: {
    method: "GET",
    path: (otherUserId: number) => `/groups/contacts/${otherUserId}`,
  },
  create: {
    method: "POST",
    path: () => `/groups`,
    body: (data: CreateGroupDTO) => data,
  },
  delete: {
    method: "DELETE",
    path: (groupId: number) => `/groups/${groupId}`,
  },
  nudge: {
    method: "POST",
    path: (groupId: number) => `/groups/${groupId}/nudge`,
  },
  startTyping: {
    method: "POST",
    path: (groupId: number) => `/groups/${groupId}/start-typing`,
  },
  stopTyping: {
    method: "POST",
    path: (groupId: number) => `/groups/${groupId}/stop-typing`,
  },
};

export interface CreateGroupDTO {
  name: string;
}

export interface UpdateGroupDTO {
  name: string;
}

export interface GroupResponseDTO {
  createdAt: string;
  id: number;
  name: string;
  updatedAt: string;
  users: UserDTO[];
}

export interface GroupDTO {
  id: number;
  name: string;
}
