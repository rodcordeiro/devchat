import { Background } from '@/components/layout/background';
import React from 'react';
import { View } from 'react-native';
import NewConversation from './components/NewConversation';
import { Conversation } from './types/home.types';
import MessagesContainer from './components/Messages';

const Home: React.FC<ScreenProps<'Home'>> = () => {
  const messages: Conversation[] = [
    {
      img: 'https://rodcordeiro.github.io/shares/img/1646303205488.png',
      lastMessage:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et libero posuere, dapibus quam id, placerat dolor. Sed sed lobortis sapien. Quisque eros est, tempus a sapien ut, placerat malesuada dui. Duis tempor gravida purus quis maximus. Proin aliquet quis nisi a varius. Donec finibus leo et blandit vestibulum. In nulla ex, tristique cursus tortor vitae, convallis gravida turpis. Aliquam varius, nisl a dictum ornare, dui ante egestas ante, ut lacinia quam dui in tortor. Nulla nunc elit, sollicitudin eget pellentesque volutpat, placerat nec dui. Nunc ut libero vitae diam semper posuere. Donec fermentum justo dignissim est fermentum, at molestie diam volutpat. Proin sed dolor at nisl lobortis molestie id ac orci. Mauris pulvinar tellus vel volutpat commodo.',
      title: 'Some beautiful name',
      unredMessages: 3,
    },
    {
      img: 'https://rodcordeiro.github.io/shares/img/1646303205488.png',
      lastMessage: 'lorem',
      title: 'Some beautiful name',
    },
    {
      img: 'https://rodcordeiro.github.io/shares/img/RC.png',
      lastMessage:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et libero posuere, dapibus quam id, placerat dolor. Sed sed lobortis sapien. Quisque eros est, tempus a sapien ut, placerat malesuada dui. Duis tempor gravida purus quis maximus. Proin aliquet quis nisi a varius. Donec finibus leo et blandit vestibulum. In nulla ex, tristique cursus tortor vitae, convallis gravida turpis. Aliquam varius, nisl a dictum ornare, dui ante egestas ante, ut lacinia quam dui in tortor. Nulla nunc elit, sollicitudin eget pellentesque volutpat, placerat nec dui. Nunc ut libero vitae diam semper posuere. Donec fermentum justo dignissim est fermentum, at molestie diam volutpat. Proin sed dolor at nisl lobortis molestie id ac orci. Mauris pulvinar tellus vel volutpat commodo.',
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et libero posuere, dapibus quam id, placerat dolor. Sed sed lobortis sapien. Quisque eros est, tempus a sapien ut, placerat malesuada dui. Duis tempor gravida purus quis maximus. Proin aliquet quis nisi a varius. Donec finibus leo et blandit vestibulum. In nulla ex, tristique cursus tortor vitae, convallis gravida turpis. Aliquam varius, nisl a dictum ornare, dui ante egestas ante, ut lacinia quam dui in tortor. Nulla nunc elit, sollicitudin eget pellentesque volutpat, placerat nec dui. Nunc ut libero vitae diam semper posuere. Donec fermentum justo dignissim est fermentum, at molestie diam volutpat. Proin sed dolor at nisl lobortis molestie id ac orci. Mauris pulvinar tellus vel volutpat commodo.',
      unredMessages: 12,
    },
    {
      img: 'https://rodcordeiro.github.io/shares/img/eu.jpg',
      lastMessage: 'lorem',
      title: 'Some beautiful name',
    },
  ];
  return (
    <Background>
      <View
        style={{
          alignItems: 'center',
          flex: 1,
        }}
      >
        <MessagesContainer messages={messages} />
        <NewConversation />
      </View>
    </Background>
  );
};

export default React.memo(Home);
