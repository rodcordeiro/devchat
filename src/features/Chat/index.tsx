import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';

import { Background } from '@/components/layout/background';
import Icon from '@/components/tools/Icon';
import { MessagesMock } from '@/utils/mock';
import { ChatTypes } from '@/@types/chat';
import { useTheme } from '@/hooks/theme';
import { Header } from './components/Header';

const ChatScreen: React.FC<ScreenProps<'Chat'>> = ({ route, navigation }) => {
  const { id } = route.params;
  const { theme } = useTheme();
  const { setOptions } = navigation;
  const [chatDetails, setChatDetails] = React.useState<ChatTypes.Chat>();

  React.useLayoutEffect(() => {
    const details = MessagesMock.find((chat) => chat.id === id);
    if (details) {
      setChatDetails(details);
      setOptions({
        headerShown: true,
        header: () => <Header {...details} />,
      });
    }
  }, [id]);
  return (
    <Background>
      <View>
        <Text>{chatDetails?.title}</Text>
      </View>
    </Background>
  );
};

export default React.memo(ChatScreen);
