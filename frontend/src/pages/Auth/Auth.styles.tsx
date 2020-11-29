import styled from "styled-components";

const Background = styled.div`
  --group-spacing: 25px;
  --checkbox-spacing: 5px;

  background: rgb(254, 254, 254);
  background: linear-gradient(
    0deg,
    rgba(254, 254, 254, 1) 0%,
    rgba(203, 218, 239, 1) 51%,
    rgba(254, 254, 254, 1) 100%
  );
  text-align: left;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #1e2354;

  /* img {
    width: 200px;
    height: 200px;
    margin-bottom: 30px;
    border-radius: 5px;
  } */

  form {
    min-width: 300px;
    display: flex;
    flex-direction: column;

    label {
      text-align: left;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"] {
      margin-bottom: var(--group-spacing);
      padding: 5px 10px;
    }

    input[type="text"],
    input[type="checkbox"] {
      border: 1px solid #a3acba;
      border-radius: 5px;
    }

    span {
      margin-bottom: var(--checkbox-spacing);
    }

    span:first-of-type {
      margin-bottom: var(--group-spacing);
    }

    span:last-of-type {
      margin-bottom: var(--group-spacing);
    }

    select {
      margin-left: 5px;
    }

    button {
      align-self: center;
      padding: 10px 20px;
      width: 150px;
      background: rgb(203, 218, 239);
      background: linear-gradient(
        0deg,
        rgba(203, 218, 239, 1) 51%,
        rgba(254, 254, 254, 1) 100%
      );
      font-weight: bold;
      color: #1e2354;
      border: 1px #d4d4d4;
    }
  }
`;

export const Styled = {
  Background,
};
