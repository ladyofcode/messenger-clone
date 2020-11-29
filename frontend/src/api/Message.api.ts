import {
  CreateMessageDTO,
  MessageResource,
  MessageDTO,
} from "../common/dto/message-dto";
import { groupResource, GroupResponseDTO } from "../common/dto/group-dto";
import { makeRequest } from "../utils/makeRequest";

class MessageApi {
  static async getGroupMessages(groupId: number) {
    const { method, path } = MessageResource.all;

    const endpoint = path(groupId);

    return makeRequest<MessageDTO[]>(endpoint, {
      method,
    });
  }

  static async sendMessage(payload: CreateMessageDTO) {
    const { method, path } = MessageResource.create;

    const endpoint = path();

    return makeRequest<MessageDTO | null>(endpoint, {
      method,
    });
  }

  static async talkToStrangerOrFriend(strangerId: number) {
    const { method, path } = groupResource.groupForContactUser;

    const endpoint = path(strangerId);

    return makeRequest<GroupResponseDTO>(endpoint, {
      method,
    });
  }
}

export { MessageApi };
