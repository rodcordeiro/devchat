import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { RegisterFormType } from '../types/register.types';

export function useRegisterHook() {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const handleSubmit = React.useCallback(async (payload: RegisterFormType) => {
    setLoading(true);
    setTimeout(() => {
      console.log(payload);
      setLoading(false);
      navigate('Home');
    }, 1500);
  }, []);

  return {
    loading,
    handleSubmit,
  };
}
