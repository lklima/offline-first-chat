import { Entypo } from "@expo/vector-icons";
import { withObservables } from "@nozbe/watermelondb/react";
import { router } from "expo-router";
import { Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// components
import { BaseButton } from "../BaseButton";
// models
import { database } from "@/app/_layout";
import { Chats } from "@/model/Chats";
// styles
import { theme } from "@/constants/theme";
import { styles } from "./styles";

const enhance = withObservables(["chatId"], ({ chatId }: { chatId: string }) => ({
  chat: database.collections.get<Chats>("chats").findAndObserve(chatId),
}));

interface Props {
  chatId: string;
  chat: Chats;
}

const ChatHeaderComponent = ({ chat }: Props) => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.header, { paddingTop: top + theme.spacing.md }]}>
      <View style={styles.leftContent}>
        <BaseButton style={styles.backButton} onPress={router.back}>
          <Entypo name="chevron-left" size={24} color="black" />
        </BaseButton>
        <Image source={{ uri: chat.userImage }} style={styles.userImage} />
        <View>
          <Text style={styles.userName}>{chat.userName}</Text>
          <Text style={styles.lastMessage}>Last seen 12:00</Text>
        </View>
      </View>
      <Entypo name="dots-three-vertical" size={24} color="black" />
    </View>
  );
};

export const ChatHeader = enhance(ChatHeaderComponent);
