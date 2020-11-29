import React from "react";
import { UserDTO } from "../../../../common/dto/user-dto";
import MsnUserIcon from "../../../../components/icons/MsnUserIcon";
import * as SC from "./Contact.styles";

const Contact = ({ id, firstName, lastName }: UserDTO) => {
  const displayName = `${firstName} ${lastName}`;

  return (
    <SC.Container to={`/chat/${id}`}>
      <MsnUserIcon />
      <SC.Username>{displayName}</SC.Username>
    </SC.Container>
  );
};

export default Contact;
