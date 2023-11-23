import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useTheme } from '@/hooks/theme';

type Props = {
  name: string;
  action?: () => void;
};
const Icon = ({ name, action }: Props) => {
  const { theme } = useTheme();
  return (
    <Pressable onPress={() => (action ? action() : null)}>
      <Feather
        name={name as any}
        color={theme.colors.primary}
        size={24}
        style={{ padding: 10 }}
      />
    </Pressable>
  );
};

export default Icon;
