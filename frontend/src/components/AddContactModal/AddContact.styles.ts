import styled from "styled-components";
import Modal from "react-modal";

const Container = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding: 5rem;
  color: #fff;
  background: #97b5ec;
`;

const InnerContainer = styled.div`
  width: 90%;
  height: 90%;
  margin: auto;
`;

const Label = styled.label`
  margin-bottom: 0.25rem;
`;

const Input = styled.input`
  padding: 1rem;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
  border: 1px solid black;
`;

const Button = styled.button`
  width: fit-content;
  padding: 0.5rem;
  &.mr-2 {
    margin-right: 1rem;
  }
`;

const Box = styled.div`
  display: flex;
`;

export { Container, InnerContainer, Label, Input, Button, Box };
