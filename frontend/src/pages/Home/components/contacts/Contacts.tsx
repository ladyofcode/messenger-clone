import React from "react";
import { Contact } from "../";
import { ContactDTO } from "../../../../common/dto/contact-dto";

interface IContainerProps {
  contacts: ContactDTO | null;
}

const Contacts: React.FC<IContainerProps> = ({ contacts }) => {
  return (
    <div>
      {contacts?.map((contact) => (
        <Contact {...contact} />
      ))}
    </div>
  );
};

export default Contacts;
