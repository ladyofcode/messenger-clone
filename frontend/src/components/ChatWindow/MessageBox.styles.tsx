import styled from "styled-components";

const MessageBox = styled.div`
    height: 100%;
    border: 1px solid #9EA7B0;
    border-radius: 5px 5px 0px 0px;
    background-color: #FDFDFD;
    margin: 40px 0px;
    padding: 10px;
    overflow: scroll;

    @media only screen and (max-width: 600px) {
        max-height: 400px;
    }
`;

export const Styled = {
    MessageBox,
};
