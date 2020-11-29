import React from "react";
import { Styled } from "./Menu.styles";
import {ReactComponent as Back} from './back.svg'
import {ReactComponent as User} from './user.svg'
import {ReactComponent as File} from './file.svg'
import {ReactComponent as Camera} from './camera.svg'
import {ReactComponent as Voice} from './voice.svg'


export function Menu(props: any) {
  
  return (
    <Styled.TopNav>
      <Back />
      <User />
      <File />
      <Camera />
      <Voice />
    </Styled.TopNav>
  );
}
