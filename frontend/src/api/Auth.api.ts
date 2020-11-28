import { LoginDTO } from "./../../../common/src/dto/auth-dto";
import { AuthResource, RegisterDTO } from "../common/dto/auth-dto";
import { UserResource, UserDTO } from "../common/dto/user-dto";
import { makeRequest } from "../utils/makeRequest";

class AuthApi<T> {
  static async register(payload: RegisterDTO) {
    const { method, path } = AuthResource.register;

    const endpoint = path();

    return makeRequest(endpoint, {
      method,
      body: JSON.stringify(payload),
    });
  }

  static async login(payload: LoginDTO) {
    const { method, path } = AuthResource.login;

    const endpoint = path();

    return makeRequest(endpoint, {
      method,
      body: JSON.stringify(payload),
    });
  }

  static async logout() {
    const { method, path } = AuthResource.logout;

    const endpoint = path();

    return makeRequest(endpoint, {
      method,
    });
  }

  static async me() {
    const { method, path } = UserResource.currentUser;

    const endpoint = path();

    return makeRequest(endpoint, {
      method,
    });
  }
}

export { AuthApi as authApi };
