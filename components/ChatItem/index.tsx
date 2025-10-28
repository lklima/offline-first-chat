import { Image, Text, View } from "react-native";

// styles
import { styles } from "./styles";
// components
import { BaseButton } from "../BaseButton";
// models
import { Chats } from "@/model/Chats";
// helpers
import { formatTime } from "@/helpers";

interface Props {
  chat: Chats;
  onPress: () => void;
  onLongPress: () => void;
}

export const ChatItem = ({ chat, onPress, onLongPress }: Props) => {
  return (
    <BaseButton style={styles.container} onPress={onPress} onLongPress={onLongPress}>
      <View style={styles.leftContent}>
        <Image source={{ uri: chat.userImage }} style={styles.image} />
        <View>
          <Text style={styles.userName}>{chat.userName}</Text>
          <Text style={styles.lastMessage}>{chat.lastMessage || "No messages yet"}</Text>
        </View>
      </View>
      <View style={styles.rightContent}>
        <Text style={styles.lastMessageTime}>
          {formatTime(chat.lastMessageTime || chat.createdAt)}
        </Text>
        {chat.unreadCount > 0 && (
          <View style={styles.unreadCountContainer}>
            <Text style={styles.unreadCount}>{chat.unreadCount}</Text>
          </View>
        )}
      </View>
    </BaseButton>
  );
};
