import { ChatTypes } from '@/@types/chat';

export type Conversation = {
  id: string;
  img: string;
  title: string;
  lastMessage: ChatTypes.Message;
  unredMessages?: number;
};
