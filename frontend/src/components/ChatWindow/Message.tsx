import { Styled } from "./Message.styles";

export function Message(props: any) {
  return (
    <Styled.ChatLine>
      { props.name &&
        <div>
          <p>{ props.name } says:</p>
          <p>{ props.text }</p>
        </div>     
      }
        
      </Styled.ChatLine>
  );
}
