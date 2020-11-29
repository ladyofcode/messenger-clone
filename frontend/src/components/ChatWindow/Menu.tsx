import React from "react";
import { Styled } from "./Menu.styles";

export function Menu(props: any) {
  console.log("from menu");
  return (
    <Styled.TopNav>
      <div>
        <a>(invi)</a>
      </div>
      <div>
        <a>(file)</a>
      </div>
      <div>
        <a>(vide)</a>
      </div>
      <div>
        <a>(voic)</a>
      </div>
    </Styled.TopNav>
  );
}
