import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useInput } from "../../../hooks/useInput";
import { useAuth } from "../../../hooks/services/useAuth";
import { Styled } from "../Auth.styles";
import Spinner from "../Spinner";
import MsnUserIcon from "../../../components/icons/MsnUserIcon"; 

interface ILoginProps {}

export interface IInputValues {
  email: string;
  password: string;
}

const initialValue: IInputValues = {
  email: "",
  password: "",
};

export interface IAccountSettings {
  rememberMe: boolean;
  rememberPassword: boolean;
  autoLogin: boolean;
}

export const initialSettings: IAccountSettings = {
  rememberMe: false,
  rememberPassword: false,
  autoLogin: false,
};

const Login: React.FC<ILoginProps> = () => {
  const { inputProps, values, isEmpty } = useInput<IInputValues>(initialValue);
  const { loading, loginAccount, isAuthenticated, error } = useAuth();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (isEmpty()) return;

    loginAccount(values);
  };

  if (!loading && isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Styled.Background>
        <MsnUserIcon />

        <form onSubmit={handleSubmit}>
          {error && <b style={{ marginBottom: ".5rem" }}>{error}</b>}
          <label>Email</label>
          <input type="email" name="email" {...inputProps("email")} required />

          <label>Password</label>
          <input
            type="password"
            name="password"
            {...inputProps("password")}
            required
          />

          <span>
            <label>Status</label>
            <select id="status" name="status">
              <option value="online">Online</option>
              <option value="offline">Offline</option>
              <option value="dnd">Do not disturb</option>
            </select>
          </span>

          <span>
            <input
              type="checkbox"
              id="remember"
              name="remember"
              value="remember"
            />
            <label htmlFor="remember">Remember me</label>
          </span>

          <span>
            <input
              type="checkbox"
              id="password"
              name="password"
              value="password"
            />
            <label htmlFor="password">Remember my password</label>
          </span>

          <span>
            <input
              type="checkbox"
              id="automatic"
              name="automatic"
              value="automatic"
            />
            <label htmlFor="automatic">Sign me in automatically</label>
          </span>

          <Link to="/register" style={{ marginBottom: "2rem" }}>
            Don't have an account?
          </Link>

          {loading ? (
            <button disabled={true}>
              <Spinner />
            </button>
          ) : (
            <button value="Submit">Login</button>
          )}
        </form>
      </Styled.Background>
    </>
  );
};

export default Login;
