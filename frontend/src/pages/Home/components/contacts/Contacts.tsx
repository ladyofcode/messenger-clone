import React from "react";
import { Contact } from "../";
import { ContactDTO } from "../../../../common/dto/contact-dto";
import { Styled } from './Contacts.styles'

const priorities = {
  'online': 2,
  'away': 1,
  'offline': 0,
}

interface IContainerProps {
  contacts: ContactDTO | null;
}

const Contacts: React.FC<IContainerProps> = ({ contacts }) => {
  console.log(contacts)

  const totalContacts = contacts!.length;
  const offline = contacts!.filter((contact) => contact.status === 'offline').length;
  
  return (
    <div>
      <Styled.ContactGroupTitle>Contacts ({totalContacts - offline}/{totalContacts})</Styled.ContactGroupTitle>
      {contacts?.sort((a, b) => priorities[a.status] > priorities[b.status] ? -1 : 1).map((contact) => (
        <Contact {...contact} key={contact.id} />
      ))}
    </div>
  );
};

export default Contacts;
