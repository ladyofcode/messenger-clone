import { useState, useEffect } from "react";
import { ContactsApi as contactsApi } from "../api/Contacts.api";
import { ContactDTO } from "../common/dto/contact-dto";

function useContacts() {
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState<ContactDTO | null>([]);

  useEffect(() => {
    contactsApi
      .getContacts()
      .then(({ data }) => setContacts(data))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    contacts,
  };
}

export { useContacts };
