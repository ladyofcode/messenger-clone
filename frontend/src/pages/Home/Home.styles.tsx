import styled from 'styled-components';

const TopBar = styled.header`
    width: 100%;
    display: flex;
    background: rgb(252,252,252);
    background: linear-gradient(0deg, rgba(252,252,252,1) 0%, rgba(228,236,246,1) 64%, rgba(203,218,239,1) 84%); 
    box-sizing: border-box;

    h2 {
        color: #5C5C5C;
    }

    > div:first-of-type {
        /* float: left; */
        width: 80px;
        height: 80px;
        background-color: #CBDAEF;
        border: 1px #dbdbdb solid;
        border-radius: 5px;
        margin: 20px;
        flex-shrink: 0;
    }

    > div:last-of-type {
        
        /* flex-grow: 1;
        flex-shrink: 1; */
        overflow: hidden;
        margin-top: 20px;
        margin-right: 20px;

        div {
            display: flex;
        }

        
        
    }

    p {
        font-weight: normal;
        /* max-width: 400px; */
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #5C5C5C;
    }

    select {
        background-color: rgba(0, 0, 0, 0);
        border: none;
        margin-left: 10px;
    }

`;

const GroupsContainer = styled.div`
    padding: 20px 40px;
    background: rgb(252,252,252);
    height: 100%;
   
`;

const AddContact = styled.div`
    background: rgb(252,252,252);
    height: 100%;
    border: 2px #868686 solid;
    padding: 10px 10px;
    width: 200px;
    text-align: center;
    border-radius: 5px;
    margin-top: 20px;
    margin-bottom: 20px;

    span {
        color: green;

    }
`;


export const Styled = {
    TopBar,
    GroupsContainer,
    AddContact,
    
};
