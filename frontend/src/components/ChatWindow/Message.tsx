import { MessageDTO } from "../../common/dto";
import { useAuth } from "../../hooks/services/useAuth";
import { Styled } from "./Message.styles";

export function Message({ content, sender }: MessageDTO) {
  const { user } = useAuth();

  const username =
    user!.firstName === sender.firstName
      ? "you said:"
      : `${sender.firstName} ${sender.lastName} said:`;

  return (
    <Styled.ChatLine>
      <div>
        <p>{username}</p>
        <p>{content}</p>
      </div>
    </Styled.ChatLine>
  );
}
