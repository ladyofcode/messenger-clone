import React from "react";
import { Link } from "react-router-dom";
import { Styled } from "../Auth.styles";

interface IRegistrationProps {}

const Registration: React.FC<IRegistrationProps> = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <Styled.Background>
      {/* Tabbs her implementation of an avatar */}
      <div></div>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="text" />

        <label>Password</label>
        <input type="text" />

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
