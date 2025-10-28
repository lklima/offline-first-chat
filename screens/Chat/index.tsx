import { Entypo } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { FlatList, TextInput, View } from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// components
import { BaseButton } from "@/components/BaseButton";
import { ChatHeader } from "@/components/ChatHeader";
import { ChatMessage } from "@/components/ChatMessage";
// styles
import { theme } from "@/constants/theme";
import { styles } from "./styles";

export const Chat = () => {
  // hooks
  const { bottom } = useSafeAreaInsets();
  const { chat: chatId } = useLocalSearchParams();

  // state
  const [message, setMessage] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={-bottom}
    >
      <ChatHeader chatId={chatId} />
      <View style={styles.content}>
        <FlatList
          data={[]}
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
