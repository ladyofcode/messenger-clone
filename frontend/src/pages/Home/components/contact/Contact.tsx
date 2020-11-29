import React from "react";
import { UserDTO } from "../../../../common/dto/user-dto";
import MsnUserIcon from "../../../../components/icons/MsnUserIcon";
import { MessageApi as messageApi } from "../../../../api/Message.api";
import * as SC from "./Contact.styles";
import { useHistory } from "react-router-dom";
import { useGroup } from "../../../../hooks/services/useGroup";

const Contact = ({ id, firstName, lastName }: UserDTO) => {
  const history = useHistory();
  const { setGroup } = useGroup();
  const displayName = `${firstName} ${lastName}`;

  // should go in group context
  async function handleNavigation() {
    const { data, error } = await messageApi.talkToStrangerOrFriend(id);

    if (error) {
      console.log("couldnt make group ", error);
      return;
    }

    setGroup(data);
    history.push(`/chat/${data!.id}`);
  }

  return (
    <SC.Container as="div" onClick={handleNavigation}>
      <MsnUserIcon />
      <SC.Username>{displayName}</SC.Username>
    </SC.Container>
  );
};

export default Contact;
