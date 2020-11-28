import styled from "styled-components";

const AvatarBox = styled.div`
    width: 200px;
    height: 200px;

    img {
        width: 200px;
        height: 200px;
        border: 3px solid #cecece;
        border-radius: 5px;
        background-color: #cecece;
    }

    > div:first-of-type {
        height: 10px;
        width: 10px;
    }
    
`;

export const Styled = {
    AvatarBox,
};
