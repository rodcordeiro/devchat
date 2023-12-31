import type { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Home: undefined;
  };

  type ScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
    RootStackParamList,
    T
  >;
}
