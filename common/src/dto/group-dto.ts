export const groupResource = {
  allMine: {
    method: "GET",
    path: () => `/groups`
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