import { Image, Text, View } from "react-native";

// styles
import { router } from "expo-router";
import { BaseButton } from "../BaseButton";
import { styles } from "./styles";

interface Props {
  chat: Chat;
}

export const ChatItem = ({ chat }: Props) => {
  const handlePress = () => {
    router.push(`/${chat.id}`);
  };

  return (
    <BaseButton style={styles.container} onPress={handlePress}>
      <View style={styles.leftContent}>
        <Image source={{ uri: chat.userImage }} style={styles.image} />
        <View>
          <Text style={styles.userName}>{chat.userName}</Text>
          <Text style={styles.lastMessage}>{chat.lastMessage}</Text>
        </View>
      </View>
      <View style={styles.rightContent}>
        <Text style={styles.lastMessageTime}>{chat.lastMessageTime}</Text>
        <View style={styles.unreadCountContainer}>
          <Text style={styles.unreadCount}>{chat.unreadCount}</Text>
        </View>
      </View>
    </BaseButton>
  );
};
