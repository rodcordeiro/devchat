import { Conversation } from '@/features/Home/types/home.types';

export const MessagesMock = Array(Math.floor(Math.random() * 10) + 1)
  .fill('')
  .map(() => ({
    id: Math.floor(Math.random() * 2000).toString(),
    img: 'https://rodcordeiro.github.io/shares/img/1646303205488.png',
    messages: Array(Math.floor(Math.random() * 100))
      .fill(0)
      .map(() => ({
        id: Math.floor(Math.random() * 2000).toString(),
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et libero posuere, dapibus quam id, placerat dolor. Sed sed lobortis sapien. Quisque eros est, tempus a sapien ut, placerat malesuada dui. Duis tempor gravida purus quis maximus. Proin aliquet quis nisi a varius. Donec finibus leo et blandit vestibulum. In nulla ex, tristique cursus tortor vitae, convallis gravida turpis. Aliquam varius, nisl a dictum ornare, dui ante egestas ante, ut lacinia quam dui in tortor. Nulla nunc elit, sollicitudin eget pellentesque volutpat, placerat nec dui. Nunc ut libero vitae diam semper posuere. Donec fermentum justo dignissim est fermentum, at molestie diam volutpat. Proin sed dolor at nisl lobortis molestie id ac orci. Mauris pulvinar tellus vel volutpat commodo.'.substring(
            0,
            Math.floor(Math.random() * 1000),
          ),
        author: Math.floor(Math.random() * 20).toString(),
        createdAt: new Date().toISOString(),
      })),
    title: 'Some beautiful name',
    unredMessages:
      Math.floor(Math.random() * 10) > 5
        ? Math.floor(Math.random() * 5)
        : undefined,
  }));

export const messages: Conversation[] = MessagesMock.map((message) => ({
  ...message,
  lastMessage: message.messages[message.messages.length - 1],
}));
