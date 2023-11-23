import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

export type InputProps = {
  name: string | number | symbol;
  type?: 'text' | 'number' | 'password' | 'email';
  defaultValue?: string | number;
  label?: string;
  icon?: string;
  iconAction?: () => void;
  trailingIcon?: string;
  trailingIconAction?: () => void;
  onChangeText?: (newValue: string | number) => void;
} & TextInputProps;
