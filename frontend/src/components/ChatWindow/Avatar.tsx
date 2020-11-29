import { useAuth } from "../../hooks/services/useAuth";
import { Styled } from "./Avatar.styles";
import { UserDTO } from "../../common/dto/user-dto";


interface IAvatarProps {
  user: UserDTO;
}

const Avatar: React.FC<IAvatarProps> = ({ user }) =>  {

  return (
    <Styled.AvatarBox>
      <Styled.Avatar src={`https://avatars.dicebear.com/api/bottts/${user.firstName+user.lastName}.svg`} />
      <div className="downArrow"></div>
      <div className="sideArrow"></div>
    </Styled.AvatarBox>
  );
}

export default Avatar;
