import React from 'react';
import { View } from 'react-native';

import { Background } from '@/components/layout/background';
import { messages } from '@/utils/mock';

import NewConversation from './components/NewConversation';
import MessagesContainer from './components/Messages';

const Home: React.FC<ScreenProps<'Home'>> = () => {
  console.log({ messages });
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
