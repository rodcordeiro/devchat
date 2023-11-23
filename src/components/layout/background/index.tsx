import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { Dimensions } from 'react-native';
import { useTheme } from '@/hooks/theme';

interface IBackgroundProps {
  children: React.ReactNode;
}

export const Background = ({ children }: IBackgroundProps) => {
  const { theme } = useTheme();

  return (
    <>
      <Svg
        width={Dimensions.get('screen').width}
        height={Dimensions.get('screen').height}
        viewBox="30 0 1125 2362"
        fill="none"
        style={{
          zIndex: -100,
          position: 'absolute',
          flex: 1,
        }}
      >
        <Path
          d="M621.193 247.5C222.793 60.7 30.2196 100.333 2.88627 0C-17.4471 1043 -0.113837 2118.02 -0.114198 2237.5C-0.114456 2323 71.8857 2406 289.386 2334.5C387.657 2302.19 421.386 2092.52 841.886 1724.02C1178.29 1429.22 1138.55 953.333 1100.39 830.5C1065.72 673.167 1019.59 434.3 621.193 247.5Z"
          fill={theme.colors.background.secondary}
        />
      </Svg>
      {children}
    </>
  );
};
