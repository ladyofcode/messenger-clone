import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useInput } from "../../../hooks/useInput";
import { useAuth } from "../../../hooks/services/useAuth";
import { Transition } from "../../../components";
import { Styled } from "../Auth.styles";

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
  const { loading, loginAccount, isAuthenticated } = useAuth();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (isEmpty()) return;

    loginAccount(values);
  };

  if (!loading && isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      {loading && <Transition />}
      <Styled.Background>
        {/* Tabbs her implementation of an avatar */}
        <div></div>

        <form onSubmit={handleSubmit}>
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

          <button type="submit" value="Submit">
            Login
          </button>
        </form>
      </Styled.Background>
    </>
  );
};

export default Login;
