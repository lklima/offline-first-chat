import { FontAwesome6 } from "@expo/vector-icons";
import { Q } from "@nozbe/watermelondb";
import { withObservables } from "@nozbe/watermelondb/react";
import { router } from "expo-router";
import { Alert, FlatList, Text, View } from "react-native";

// components
import { ChatItem } from "../ChatItem";
// models
import { database } from "@/app/_layout";
import { Chats } from "@/model/Chats";
// styles
import { theme } from "@/constants/theme";
import { styles } from "./styles";

const enhance = withObservables(["chats"], () => ({
  chats: database.collections
    .get<Chats>("chats")
    .query(Q.sortBy("created_at", Q.desc))
    .observe(),
}));

interface Props {
  chats: Chats[];
}

const ChatListComponent = ({ chats }: Props) => {
  const handlePress = (chatId: string) => {
    router.push(`/${chatId}`);
  };

  const handleDelete = async (chat: Chats) => {
    try {
      await database.write(async () => {
        await chat.destroyPermanently();
      });
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to delete chat");
    }
  };

  const handleLongPress = (chat: Chats) => {
    Alert.alert("Delete chat", "Are you sure you want to delete this chat?", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", style: "destructive", onPress: () => handleDelete(chat) },
    ]);
  };

  return (
    <FlatList
      data={chats}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <FontAwesome6 name="comments" size={30} color={theme.colors.textSecondary} />
          <Text style={styles.emptyText}>No chats found, start a new chat</Text>
        </View>
      }
      renderItem={({ item }) => (
        <ChatItem
          chat={item}
          onPress={() => handlePress(item.id)}
          onLongPress={() => handleLongPress(item)}
        />
      )}
    />
  );
};

export const ChatList = enhance(ChatListComponent);
