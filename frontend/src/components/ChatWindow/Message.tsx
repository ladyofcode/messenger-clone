import { MessageDTO } from "../../common/dto";
import { Styled } from "./Message.styles";

export function Message({ content }: MessageDTO) {
  return (
    <Styled.ChatLine>
      {props.name && (
        <div>
          <p>{props.name} says:</p>
          <p>{props.text}</p>
        </div>
      )}
    </Styled.ChatLine>
  );
}
