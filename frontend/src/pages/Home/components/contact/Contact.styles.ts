import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
`;

const Username = styled.span`
  letter-spacing: 0.05em;
  font-weight: 600;
  margin-left: 0.5rem;
`;

export { Container, Username };
