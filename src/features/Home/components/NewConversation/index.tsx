import Logo from '@/assets/Logo';
import { useTheme } from '@/hooks/theme';
import React from 'react';
import { Pressable, View, Image } from 'react-native';

type Props = {};

const NewConversation: React.FC<Props> = () => {
  const { theme } = useTheme();
  return (
    <Pressable
      onPress={() => console.log('wanna talk')}
      style={{
        padding: 10,
        backgroundColor: theme.colors.primary,
        width: 75,
        height: 75,
        borderRadius: 75,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 25,
        right: 25,
      }}
    >
      <Logo
        white
        style={{
          width: 40,
          height: 35,
        }}
      />
    </Pressable>
  );
};

export default React.memo(NewConversation);
