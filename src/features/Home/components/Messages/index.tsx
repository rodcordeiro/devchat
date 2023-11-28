import { FlatList, View, ActivityIndicator } from 'react-native';
import { Conversation } from '../../types/home.types';
import { Message } from '../Message';

type Props = {
  messages: Conversation[];
};
const MessagesContainer = ({ messages }: Props) => {
  return (
    <FlatList
      data={messages || []}
      renderItem={({ item }) => <Message {...item} />}
      ListEmptyComponent={() => (
        <View>
          <ActivityIndicator />
        </View>
      )}
      contentContainerStyle={{
        gap: 10,
      }}
      style={{
        marginTop: 100,
        width: '90%',
      }}
    />
  );
};

export default MessagesContainer;
