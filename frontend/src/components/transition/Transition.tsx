import { SyncLoader } from "react-spinners";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1337;
`;

const Transition: React.FC = () => {
  return (
    <Container>
      <SyncLoader loading={true} color="#9dc9ff" />
    </Container>
  );
};

export default Transition;
