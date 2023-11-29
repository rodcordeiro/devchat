import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';

import Icon from '@/components/tools/Icon';

import { ChatTypes } from '@/@types/chat';
import { useTheme } from '@/hooks/theme';

export const Header = (chatDetails: Partial<ChatTypes.Chat>) => {
  const { theme } = useTheme();
  return (
    <View
      style={{
        backgroundColor: theme.colors.background.terciary,
        height: 120,
        alignItems: 'center',
        paddingTop: 40,
        flexDirection: 'row',
      }}
    >
      <Pressable onPress={() => console.log('oi')}>
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
  );
};
