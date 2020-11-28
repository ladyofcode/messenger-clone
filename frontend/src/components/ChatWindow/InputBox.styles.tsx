import styled from "styled-components";

const MessageEntry = styled.div`
    height: 50px;
    width: 100%;
    margin-bottom: 50px;
    display: flex;

    form {
        display: flex;
        width: 100%;
        margin-top: auto;

        textarea {
            width: 100%; 
            margin-right: 20px;
            border: 1px solid #9EA7B0;
            border-radius: 0px 0px 0px 5px;
            background-color: #FDFDFD;
            padding: 10px;
        }

        button {
            background-color: rgba(0, 0, 0, 0);
            border: 1px solid #9EA7B0;
            padding: 20px 50px;
            font-weight: bold;
            border-radius: 0px 0px 5px 0px;

            &:hover {
                background-color:rgba(184, 197, 199, 0.712);

            }
        }
    }
`;

export const Styled = {
    MessageEntry,
};
