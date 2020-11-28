import React, { createContext, useContext, useEffect, useState } from "react";
import { UserDTO } from "../../common/dto/user-dto";
import { authApi } from "../../api/Auth.api";
import { LoginDTO, RegisterDTO } from "../../common/dto/auth-dto";

interface IUserContext {
  user: UserDTO | null;
  registerAccount: (payload: RegisterDTO) => Promise<boolean>;
  loginAccount: (payload: LoginDTO) => Promise<void>;
  logoutAccount: () => Promise<void>;
  fetchUserData: () => Promise<void>;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const userContext = createContext<IUserContext | null>(null);

interface IUserProviderProps {
  children: JSX.Element;
}

export const AuthProvider = ({ children }: IUserProviderProps) => {
  const auth = useAuthProvider();
  return <userContext.Provider value={auth}>{children}</userContext.Provider>;
};

// Better way (c) ian
export const useAuth = (): IUserContext => {
  return useContext(userContext) as IUserContext;
};

const useAuthProvider = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<UserDTO | null>(null);
  const [error, setError] = useState(null);

  const registerAccount = async (payload: RegisterDTO) => {
    const { error } = await authApi.register(payload);

    if (error) {
      return false;
    }

    return true;
  };

  const loginAccount = async (payload: LoginDTO) => {
    setLoading(true);

    const { error, data } = await authApi.login(payload);

    if (error) {
      setError(error);
      setLoading(false);
      return;
    }

    setUser(data!.user);
    setLoading(false);
  };

  const fetchUserData = async () => {
    setLoading(true);
    const { data, error } = await authApi.me();

    setUser(error ? null : data);
    setLoading(false);
  };

  const logoutAccount = async () => {
    await authApi.logout();
    setUser(null);
  };

  useEffect(() => {
    if (!user) {
      fetchUserData();
    }
  }, [user]);

  const isAuthenticated = !!user;

  return {
    user,
    registerAccount,
    loginAccount,
    logoutAccount,
    fetchUserData,
    isAuthenticated,
    loading,
    error,
  };
};
