import { UserDTO } from "./user-dto"

export const groupResource = {
  allMine: {
    method: "GET",
    path: () => `/contacts`
  },
  create: { 
    method: "POST",
    path: () => `/contacts`,
    body: (data: CreateContactDTO) => data
  },
  delete: { 
    method: "DELETE",
    path: (userId: number) => `/contacts/${userId}`,
  }
} 

export type ContactDTO = UserDTO[];

export interface CreateContactDTO {
  email: string;
}
