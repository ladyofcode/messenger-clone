import styled from "styled-components";

const Container = styled.li`
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
