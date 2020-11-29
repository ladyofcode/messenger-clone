import styled from "styled-components";

const AvatarBox = styled.div`
    width: 200px;
    height: 200px;

    > div:first-of-type {
        height: 10px;
        width: 10px;
    }
`;

const Avatar = styled.img`
    width: 200px;
    height: 200px;
    border: 2px solid #9EA7B0;
    border-radius: 5px;
    background-color: #f1f1f1;
    padding: 10px;
`;

export const Styled = {
    AvatarBox,
    Avatar
};
