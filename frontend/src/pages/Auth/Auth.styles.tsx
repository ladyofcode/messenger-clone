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
      padding: 10px 15px;
      border: 1px solid #ACBACC;
      border-radius: 5px;
    }

    input[type="text"],
    input[type="checkbox"] {
      border: 1px solid #a3acba;
      border-radius: 5px;
    }

    div {
      display: flex;
      align-items: center;
      margin-bottom: var(--checkbox-spacing);

      label {
        margin-left: 5px;
      }
    }

    div:first-of-type {
      margin-bottom: var(--group-spacing);

      label {
        margin-left: 0px;
      }
    }

    div:last-of-type {
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
      margin-top: 30px;
    }
  }
`;

export const Styled = {
  Background,
};
