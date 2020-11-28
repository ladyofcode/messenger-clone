import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../../../hooks/services/useAuth";
import { useInput } from "../../../hooks/useInput";
import { Styled } from "../Auth.styles";

interface IRegistrationProps {}
export interface IInputValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const initialValue: IInputValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const Registration: React.FC<IRegistrationProps> = () => {
  const { registerAccount } = useAuth();
  const { inputProps, values } = useInput<IInputValues>(initialValue);
  const { loading, isAuthenticated } = useAuth();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    registerAccount(values);
  };

  if (!loading && isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Styled.Background>
      {/* Tabbs her implementation of an avatar */}
      <div></div>

      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input name="firstName" type="text" {...inputProps("firstName")} />

        <label>Last Name</label>
        <input name="lastName" type="text" {...inputProps("lastName")} />

        <label>Email</label>
        <input name="email" type="email" {...inputProps("email")} />

        <label>Password</label>
        <input name="password" type="password" {...inputProps("password")} />

        <span>
          <Link to="/login">Already have an account?</Link>
        </span>

        <button type="submit" value="Submit">
          Register
        </button>
      </form>
    </Styled.Background>
  );
};

export default Registration;
