import { MessageDTO } from "../../common/dto";
import { Styled } from "./Message.styles";

export function Message({ content, sender }: MessageDTO) {
  const username = `${sender.firstName} ${sender.lastName}`;
  return (
    <Styled.ChatLine>
      <div>
        <p>{username} says:</p>
        <p>{content}</p>
      </div>
    </Styled.ChatLine>
  );
}
