import React from 'react';
import { View, Dimensions, Text, Pressable } from 'react-native';

import Logo from '@/assets/Logo';
import { Background } from '@/components/layout/background';
import { Form } from '@/components/tools/form';
import { useTheme } from '@/hooks/theme';

import { Styles } from './style';
import { RegisterFormSchema } from './types/register.types';
import { useRegisterHook } from './hooks/register.hook';

const { width } = Dimensions.get('window');

const RegisterScreen: React.FC<ScreenProps<'Register'>> = ({ navigation }) => {
  const { theme } = useTheme();
  const { handleSubmit, loading } = useRegisterHook();

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
          zodSchema={RegisterFormSchema}
          isLoading={loading}
          handleSubmit={handleSubmit}
          submitButtonText="Registrar"
          inputs={[
            {
              name: 'username',
              type: 'text',
              placeholder: 'Insira seu usuário',
              label: 'Nome de usuário:',
              icon: 'user',
            },
            {
              name: 'email',
              type: 'text',
              placeholder: 'Insira seu email',
              label: 'Email:',
              icon: 'at-sign',
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
          onPress={() => navigation.navigate('Login')}
          style={Styles.createAccount}
        >
          <Text style={[{ color: theme.colors.text.title }]}>
            Já possui uma conta?
            <Text style={{ color: theme.colors.primary }}> Acesse!</Text>
          </Text>
        </Pressable>
      </View>
    </Background>
  );
};

export default React.memo(RegisterScreen);
