import { UserDTO } from "./user-dto";

export const AuthResource = {
  login: {
    method: "POST",
    path: () => `/auth/login`,
    body: (data: LoginDTO) => data
  },
  logout: { 
    method: "POST",
    path: () => `/auth/logout`
  },
  register: { 
    method: "POST",
    path: () => `/auth/register`,
    body: (data: RegisterDTO) => data
  }
} 

/*
type Resource<T> = {[key: T]: Endpoint}
type Endpoint<P = any, B = any> = {method: string, path: (data?: P) => string, body?: (data: B) => B};
*/

export interface LoginResponseDTO {
  user: UserDTO;
}

export interface LoginDTO {
  email: string;
  password: string;
}

export interface RegisterResponseDTO {
  user: UserDTO;
}

export interface RegisterDTO {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LogoutResponseDTO {
  user: UserDTO;
}