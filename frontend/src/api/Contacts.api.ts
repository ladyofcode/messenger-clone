import { makeRequest } from "../utils/makeRequest";
import { ContactDTO, groupResource } from "../common/dto/contact-dto";

class ContactsApi {
  static async getContacts() {
    const { method, path } = groupResource.allMine;

    const endpoint = path();

    const data = await makeRequest<ContactDTO | null>(endpoint, { method });
    return data;
  }
}

export { ContactsApi };
