export namespace ChatTypes {
  export type Message = {
    message: string;
    author: string;
    createdAt: string;
  };
  export type Chat = {
    id: string;
    img: string;
    messages: {
      id: string;
      message: string;
      author: string;
      createdAt: string;
    }[];
    title: string;
    unredMessages: number | undefined;
  };
}
