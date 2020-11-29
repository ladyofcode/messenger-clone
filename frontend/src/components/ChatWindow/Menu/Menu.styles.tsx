import styled from "styled-components";

const TopNav = styled.header`
    width: 100%;
    display: flex;
    background: rgb(252,252,252);
    background: linear-gradient(180deg, rgba(252,252,252,1) 0%, rgba(228,236,246,1) 22%, rgba(219,229,243,1) 73%, rgba(203,218,239,1) 100%); 
    box-shadow:0px 1px 2px 2px rgba(221, 221, 221, 0.753);
    
    svg {
        width: 60px;
        height: 60px;
        margin-right: 10px;
        padding: 10px;
    }
    
`;

export const Styled = {
    TopNav,
};
