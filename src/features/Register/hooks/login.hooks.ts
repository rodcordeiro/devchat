import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { LoginFormType } from '../types/login.types';

export function useLoginHook() {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const handleSubmit = React.useCallback(async (payload: LoginFormType) => {
    setLoading(true);
    setTimeout(() => {
      console.log(payload);
      setLoading(false);
      //   navigate('Home');
    }, 1500);
  }, []);

  return {
    loading,
    handleSubmit,
  };
}
