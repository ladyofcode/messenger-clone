import { LoginDTO } from "../common/dto/auth-dto";
import {
  AuthResource,
  LoginResponseDTO,
  RegisterDTO,
} from "../common/dto/auth-dto";
import { UserDTO, UserResource } from "../common/dto/user-dto";
import { clientEvents } from "../common/events/client-event";
import { makeRequest } from "../utils/makeRequest";

class AuthApi {
  static async register(payload: RegisterDTO) {
    const { method, path } = AuthResource.register;

    const endpoint = path();

    return makeRequest<any>(endpoint, {
      method,
      body: JSON.stringify(payload),
    });
  }

  static async login(payload: LoginDTO) {
    const { method, path } = AuthResource.login;

    const endpoint = path();

    return makeRequest<LoginResponseDTO>(endpoint, {
      method,
      body: JSON.stringify(payload),
    });
  }

  static async logout() {
    const { method, path } = AuthResource.logout;

    const endpoint = path();

    return makeRequest<any>(endpoint, {
      method,
    });
  }

  static async me() {
    const { method, path } = UserResource.currentUser;

    const endpoint = path();

    return makeRequest<UserDTO | null>(endpoint, {
      method,
    });
  }

  static async authenticateSocket() {
    //  * POST /events/create-token
    return makeRequest<any>("/events/create-token", {
      method: "POST",
    });
  }

  static getAuthenticationEvent() {
    const { name } = clientEvents.authenticate;
    return name;
  }
}

export { AuthApi as authApi };
