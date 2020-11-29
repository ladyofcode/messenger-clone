import { MessageDTO } from "../../common/dto";
import { useGroup } from "../../hooks/services/useGroup";
import { Message } from "./Message";
import { Styled } from "./MessageBox.styles";

export function MessageBox(props: any) {
  const { messages } = useGroup();

  return (
    <Styled.MessageBox>
      <div className="header"></div>
      {messages.map((m: MessageDTO) => (
        <Message {...m} key={m.id} />
      ))}
    </Styled.MessageBox>
  );
}
