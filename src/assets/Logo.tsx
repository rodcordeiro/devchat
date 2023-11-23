import React from 'react';
import { Image, ImageProps } from 'react-native';

import DarkLogo from '../../assets/dark_logo.png';
import LightLogo from '../../assets/light_logo.png';
import WhiteLogo from '../../assets/white_logo.png';
import { useTheme } from '@/hooks/theme';

type Props = { white?: boolean } & Omit<ImageProps, 'source'>;

const Logo: React.FC<Props> = ({ ...rest }) => {
  const { theme } = useTheme();
  return (
    <Image
      source={
        rest.white ? WhiteLogo : theme.title === 'dark' ? DarkLogo : LightLogo
      }
      {...rest}
    />
  );
};

export default React.memo(Logo);
