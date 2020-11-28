import React from 'react';
import { Menu } from '../../components/ChatWindow/Menu';
import { Avatar } from '../../components//ChatWindow/Avatar';
import { MessageBox } from '../../components//ChatWindow/MessageBox';
import { InputBox } from '../../components//ChatWindow/InputBox';
import { Message } from '../../components//ChatWindow/Message';
import { Styled } from "./ChatWindow.styles";

export default function ChatWindow (props: any) {
    return (
        <Styled.Container>
            <Menu />
            <div>
                <Avatar />
                <Avatar />
            </div>
            <div>
                <MessageBox />
                <InputBox />
            </div>           
        </Styled.Container>

    )
}