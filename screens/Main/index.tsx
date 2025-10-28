import { Entypo, Octicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// styles
import { theme } from "@/constants/theme";
import { styles } from "./styles";
// components
import { BaseButton } from "@/components/BaseButton";
import { BottomTab } from "@/components/BottomTab";
import { ChatList } from "@/components/ChatList";

export const Main = () => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View style={[styles.container]}>
      <View style={[styles.header, { paddingTop: top + theme.spacing.md }]}>
        <Text style={styles.headerTitle}>Messages</Text>
        <Octicons name="bell" size={24} color="black" />
      </View>
      <View style={styles.content}>
        <View style={styles.searchInputView}>
          <Octicons name="search" size={22} color={theme.colors.textSecondary} />
          <TextInput style={styles.searchInput} placeholder="Search chats" />
        </View>
        <ChatList />
      </View>
      <BaseButton
        style={[styles.addChatButton, { bottom: bottom + 150 }]}
        onPress={() => router.navigate("/modal")}
      >
        <Entypo name="plus" size={30} color="white" />
      </BaseButton>
      <BottomTab />
    </View>
  );
};
