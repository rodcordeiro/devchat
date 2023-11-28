import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';

import { Background } from '@/components/layout/background';
import Icon from '@/components/tools/Icon';
import { MessagesMock } from '@/utils/mock';
import { ChatTypes } from '@/@types/chat';
import { useTheme } from '@/hooks/theme';

const ChatScreen: React.FC<ScreenProps<'Chat'>> = ({ route, navigation }) => {
  const { id } = route.params;
  const { theme } = useTheme();
  const { setOptions } = navigation;
  const [chatDetails, setChatDetails] = React.useState<ChatTypes.Chat>();

  React.useLayoutEffect(() => {
    const details = MessagesMock.find((chat) => chat.id === id);

    setChatDetails(details);
    setOptions({
      headerShown: true,
      header: () => (
        <View
          style={{
            backgroundColor: theme.colors.background.terciary,
            height: 120,
            alignItems: 'center',
            paddingTop: 40,
            flexDirection: 'row',
          }}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <Text>
              <Icon name="chevron-left" />
            </Text>
          </Pressable>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <Image
              source={{
                uri: chatDetails?.img,
              }}
              height={50}
              width={50}
              style={{
                borderRadius: 50,
                marginRight: 20,
              }}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: theme.colors.text.title,
              }}
            >
              {chatDetails?.title}
            </Text>
          </View>
        </View>
      ),
    });
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
