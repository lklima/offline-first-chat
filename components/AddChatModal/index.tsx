import { Entypo, FontAwesome6, Fontisto } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Alert, Text, TextInput, View } from "react-native";

// styles
import { theme } from "@/constants/theme";
import { styles } from "./styles";
// components
import { BaseButton } from "../BaseButton";
// models
import { database } from "@/app/_layout";
import { Chats } from "@/model/Chats";
// helpers
import { getUserImage } from "@/helpers";

export const AddChatModal = () => {
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAddChat = async () => {
    try {
      setIsLoading(true);
      await database.write(async () => {
        await database.collections.get<Chats>("chats").create((chat) => {
          chat.userName = userName;
          chat.userImage = getUserImage();
          chat.unreadCount = 0;
        });
        router.back();
      });
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      Alert.alert("Error", "Failed to add chat");
    }
  };

  const isDisabled = userName.length === 0;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Add Chat</Text>
        <BaseButton style={styles.closeButton} onPress={() => router.back()}>
          <Fontisto name="close-a" size={18} color="black" />
        </BaseButton>
      </View>
      <View style={styles.inputView}>
        <FontAwesome6 name="user-circle" size={24} color={theme.colors.textSecondary} />
        <TextInput
          style={styles.input}
          placeholder="User name"
          keyboardType="email-address"
          onChangeText={setUserName}
        />
      </View>
      <BaseButton
        style={[styles.addButton, { opacity: isDisabled ? 0.3 : 1 }]}
        disabled={isDisabled}
        onPress={handleAddChat}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <>
            <Entypo name="chat" size={24} color="white" />
            <Text style={styles.addButtonText}>Start Chat</Text>
          </>
        )}
      </BaseButton>
    </View>
  );
};
