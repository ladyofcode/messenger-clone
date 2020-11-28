import { LoginDTO } from "./../../../common/src/dto/auth-dto";
import { AuthResource, RegisterDTO } from "../common/dto/auth-dto";
import { makeRequest } from "../utils/makeRequest";

class AuthApi {
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
}

export { AuthApi as authApi };
