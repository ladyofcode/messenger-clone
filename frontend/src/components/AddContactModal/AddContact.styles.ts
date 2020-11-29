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
  background: #fff;
  -webkit-box-shadow: 4px 4px 13px 0px rgba(38, 31, 31, 0.16);
  -moz-box-shadow: 4px 4px 13px 0px rgba(38, 31, 31, 0.16);
  box-shadow: 4px 4px 13px 0px rgba(38, 31, 31, 0.16);

  outline: none;
  border: none;

  &:active,
  &:focus {
    outline: none;
    border: none;
  }
  border-radius: 6px;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
`;

const Label = styled.label`
  margin-bottom: 0.25rem;
`;

const Input = styled.input`
  padding: 1rem;
  margin: 1rem 0 1.5rem 0;
  border: 1px solid #c3c3c3;
  border-radius: 6px;
  width: 100%;
  &:active,
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  cursor: pointer;
  width: fit-content;
  padding: 1rem;
  font-size: 0.75rem;
  font-weight: bold;
  &.mr-2 {
    margin-right: 1rem;
  }

  background: transparent;
  border-radius: 6px;
  outline: none;
  border: none;
  text-transform: uppercase;

  &.primary {
    background: #66a6ff;
    color: white;
  }

  &.secondary {
    font-weight: bold;
    opacity: 0.7;
  }

  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 0.85;
  }
`;

const Box = styled.div`
  display: flex;
`;

const Heading = styled.h1`
  color: #3489ff;
`;

export { Heading, Container, InnerContainer, Label, Input, Button, Box };
