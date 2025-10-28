import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, Image, Text, TextInput, View } from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// components
import { BaseButton } from "@/components/BaseButton";
// styles
import { ChatMessage } from "@/components/ChatMessage";
import { theme } from "@/constants/theme";
import { styles } from "./styles";

export const Chat = () => {
  // hooks
  const { top, bottom } = useSafeAreaInsets();

  // state
  const [message, setMessage] = useState("");

  const chat = {
    id: 1,
    userImage:
      "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
    userName: "John Doe",
    lastMessage: "Hello, how are you?",
    lastMessageTime: "12:00",
    unreadCount: 5,
  };

  const messages = [
    {
      id: 1,
      message: "Hello, how are you?",
      createdAt: "2021-01-01",
      sourceUser: true,
    },
    {
      id: 2,
      message: "I'm fine, thank you!",
      createdAt: "2021-01-01",
      sourceUser: false,
    },
    {
      id: 3,
      message: "What are you doing?, I'm doing nothing right now.",
      createdAt: "2021-01-01",
      sourceUser: true,
    },
  ];

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={-bottom}
    >
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
      <View style={styles.content}>
        <FlatList
          data={messages}
          inverted
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => <ChatMessage message={item} />}
        />
        <View style={[styles.inputView, { paddingBottom: bottom + theme.spacing.sm }]}>
          <BaseButton style={styles.plusButton}>
            <Entypo name="plus" size={24} color="black" />
          </BaseButton>
          <TextInput
            style={styles.input}
            placeholder="Message"
            onChangeText={setMessage}
            placeholderTextColor={theme.colors.textSecondary}
          />
          <BaseButton style={styles.sendButton}>
            <Entypo name="paper-plane" size={24} color="white" />
          </BaseButton>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
