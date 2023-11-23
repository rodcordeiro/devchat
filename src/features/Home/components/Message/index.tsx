import { View, Image, Text, Pressable, Dimensions } from 'react-native';

import { Conversation } from '../../types/home.types';
import { useTheme } from '@/hooks/theme';

const { width } = Dimensions.get('window');
export const Message = (props: Conversation) => {
  const { theme } = useTheme();
  return (
    <Pressable
      style={{
        flexDirection: 'row',
        gap: 25,
        padding: 10,
        backgroundColor: theme.colors.background.principal,
        borderRadius: 10,
        shadowColor: theme.colors.primary,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
    >
      <View>
        <Image
          source={{
            uri: props.img,
          }}
          width={60}
          height={60}
          style={{
            borderRadius: 60,
            backgroundColor: theme.colors.background.secondary,
          }}
        />
        {props.unredMessages && (
          <View
            style={{
              backgroundColor: theme.colors.primary,
              width: 40,
              height: 40,
              borderRadius: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: theme.colors.background.principal,
              borderWidth: 6,
              borderStyle: 'solid',
              position: 'absolute',
              right: -20,
              top: -10,

              //   shadowColor: theme.colors.primary,
              //   shadowOffset: {
              //     width: 0,
              //     height: 2,
              //   },
              //   shadowOpacity: 0.25,
              //   shadowRadius: 3.84,

              //   elevation: 5,
            }}
          >
            <Text
              style={{
                color: 'white',
              }}
            >
              {props.unredMessages}
            </Text>
          </View>
        )}
      </View>
      <View>
        <Text
          style={{
            color: theme.colors.text.title,
            fontWeight: 'bold',
            fontSize: 18,
            width: width * 0.55,
          }}
          ellipsizeMode="tail"
          lineBreakMode="tail"
          numberOfLines={1}
        >
          {props.title}
        </Text>
        <Text
          style={{
            color: theme.colors.text.subtitle,
            fontSize: 14,
            width: width * 0.6,
          }}
          ellipsizeMode="tail"
          lineBreakMode="tail"
          numberOfLines={1}
        >
          {props.lastMessage}
        </Text>
      </View>
    </Pressable>
  );
};
