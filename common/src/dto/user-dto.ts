export const UserResource = {
  currentUser: {
    method: "GET",
    path: () => `/users/me`
  },
  single: {
    method: "GET",
    path: (userId: number) => `/users/${userId}`
  },
  update: {
    method: "PATCH",
    path: (userId: number) => `/users/${userId}`,
    body: (data: UpdateUserDTO) => data
  }
} 

export interface UserDTO {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateUserDTO {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  username?: string;
}