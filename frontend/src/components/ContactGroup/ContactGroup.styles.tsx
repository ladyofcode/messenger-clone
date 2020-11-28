import styled from "styled-components";

// Button.styles.ts
const ContactListTitle = styled.h2`
    text-align: left;
    color: #1E264D;
    font-size: 1em;
`;

const ContactList = styled.ul`
    padding: 0;
    list-style-type: none;
    text-align: left;
    margin-bottom: 20px;

    li {
        margin-bottom: 5px;
    }
`;

const Status = styled.div`
    height: 10px;
    width: 10px;
    background-color: #7baa7b;
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
`;

export const Styled = {
    ContactList,
    ContactListTitle,
    Status,
};
