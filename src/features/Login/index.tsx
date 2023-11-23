import React from 'react';
import { View, Dimensions, Text, Pressable } from 'react-native';

import Logo from '@/assets/Logo';
import { Background } from '@/components/layout/background';
import { Form } from '@/components/tools/form';
import { useTheme } from '@/hooks/theme';

import { Styles } from './style';
import { loginFormSchema } from './types/login.types';
import { useLoginHook } from './hooks/login.hooks';

const { width } = Dimensions.get('window');

const LoginScreen: React.FC<ScreenProps<'Login'>> = ({ navigation }) => {
  const { theme } = useTheme();
  const { handleSubmit, loading } = useLoginHook();

  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);
  return (
    <Background>
      <View style={Styles.container}>
        <Logo
          style={{
            marginTop: 100,
            resizeMode: 'contain',
            width: width / 4,
            height: width / 4,
          }}
        />
        <Form
          zodSchema={loginFormSchema}
          isLoading={loading}
          handleSubmit={handleSubmit}
          submitButtonText="Acessar"
          inputs={[
            {
              name: 'username',
              type: 'text',
              placeholder: 'Insira seu usuário',
              label: 'Nome de usuário:',
              icon: 'user',
            },
            {
              name: 'password',
              type: passwordVisible ? 'text' : 'password',
              placeholder: 'Insira sua senha',
              label: 'Senha:',
              icon: 'lock',
              trailingIcon: passwordVisible ? 'eye' : 'eye-off',
              trailingIconAction: () => setPasswordVisible((prev) => !prev),
            },
          ]}
          style={Styles.form}
        />
        <Pressable
          onPress={() => navigation.navigate('Register')}
          style={Styles.createAccount}
        >
          <Text style={[{ color: theme.colors.text.title }]}>
            Não tem conta?
            <Text style={{ color: theme.colors.primary }}> Registre-se!</Text>
          </Text>
        </Pressable>
      </View>
    </Background>
  );
};

export default React.memo(LoginScreen);
