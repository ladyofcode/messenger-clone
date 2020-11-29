import React from "react";
import { Contact } from "../";
import { ContactDTO } from "../../../../common/dto/contact-dto";

interface IContainerProps {
  contacts: ContactDTO | null;
  loading: boolean;
}

const Contacts: React.FC<IContainerProps> = ({ contacts, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {contacts?.map((contact) => (
        <Contact {...contact} />
      ))}
      {JSON.stringify(contacts)}
    </div>
  );
};

export default Contacts;
