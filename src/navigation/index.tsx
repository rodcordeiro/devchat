import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { useRedux } from '@/hooks';

import { useTheme } from '@/hooks/theme';

import LoginScreen from '@/features/Login';
import RegisterScreen from '@/features/Register';
import HomeScreen from '@/features/Home';
import ChatScreen from '@/features/Chat';
import Icon from '@/components/tools/Icon';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  const { theme } = useTheme();
  // const {navigate} =  useNavigation();
  //   const authenticated = useRedux().useAppSelector(
  //     ({ auth }) =>
  //       !!auth.access_token &&
  //       !!auth.expiration &&
  //       auth.expiration.toString() > Date.now().toString(),
  //   );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: theme.colors.background.principal,
          },
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: true,
            headerTitle: '',
            headerTransparent: true,
            
            headerLeft: () => <></>,
            headerRight: () => (
              <Icon name="settings" action={() => console.log('settings')} />
            ),
          }}
        />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
