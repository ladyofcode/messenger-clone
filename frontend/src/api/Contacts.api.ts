import { makeRequest } from "../utils/makeRequest";
import { ContactDTO, ContactResource, CreateContactDTO } from "../common/dto/contact-dto";

class ContactsApi {
  static async getContacts() {
    const { method, path } = ContactResource.allMine;

    const endpoint = path();

    const data = await makeRequest<ContactDTO | null>(endpoint, { method });
    return data;
  }

  static async addContact(payload: CreateContactDTO) {
    const { method, path } = ContactResource.create;

    const endpoint = path();

    const data = await makeRequest<ContactDTO | null>(endpoint, { method, body: JSON.stringify(payload) });
    return data;
  }
}

export { ContactsApi };
