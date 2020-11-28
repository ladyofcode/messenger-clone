import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    background: rgb(252,252,252);
    background: linear-gradient(0deg, rgba(252,252,252,1) 0%, rgba(228,236,246,1) 22%, rgba(219,229,243,1) 73%, rgba(203,218,239,1) 84%); 

    /* > div:last-of-type {
        min-width: 200px;
    } */

    

    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 1fr 19fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px; 

    > div:nth-child(2), > div:nth-child(3) {
        display: flex;
        flex-direction: column;
    }

    > div:nth-child(1){ 
        grid-area: 1 / 1 / 2 / 6;
    }
    > div:nth-child(2){ 
        grid-area: 2 / 1 / 3 / 2;
        justify-content: space-around;
        align-items: center;
        
    }
    > div:nth-child(3){ 
        grid-area: 2 / 2 / 3 / 3;
        padding: 0px 15px;
    }

    @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;

        > div:nth-child(2){
            display: none;
        }
    }

    

`;

export const Styled = {
    Container,
};
