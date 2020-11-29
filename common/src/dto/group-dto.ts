export const groupResource = {
  allMine: {
    method: "GET",
    path: () => `/groups`
  },
  groupForContactUser: {
    method: "GET",
    path: (otherUserId: number) => `/groups/contacts/${otherUserId}`
  },
  create: { 
    method: "POST",
    path: () => `/groups`,
    body: (data: CreateGroupDTO) => data
  },
  delete: { 
    method: "DELETE",
    path: (groupId: number) => `/groups/${groupId}`,
  }
} 

export interface CreateGroupDTO {
  name: string;
}

export interface UpdateGroupDTO {
  name: string;
}