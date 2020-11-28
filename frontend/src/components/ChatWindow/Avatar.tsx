import { Styled } from "./Avatar.styles";

export function Avatar(props: any) {
  return (
    <Styled.AvatarBox>
      <img className="avatar"></img>
      <div className="downArrow"></div>
      <div className="sideArrow"></div>
    </Styled.AvatarBox>
  );
}
