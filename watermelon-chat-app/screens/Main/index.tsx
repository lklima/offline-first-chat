import { Octicons } from "@expo/vector-icons";
import { FlatList, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// styles
import { BottomTab } from "@/components/BottomTab";
import { ChatItem } from "@/components/ChatItem";
import { theme } from "@/constants/theme";
import { styles } from "./styles";

export const Main = () => {
  const { top } = useSafeAreaInsets();

  const chats = [
    {
      id: 1,
      userImage:
        "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
      userName: "John Doe",
      lastMessage: "Hello, how are you?",
      lastMessageTime: "12:00",
      unreadCount: 5,
    },
    {
      id: 2,
      userImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwme89cM8YZvHcybGrZl_Obd9U9p5QabozJQ&s",
      userName: "Jane Doe",
      lastMessage: "Hello, how are you?",
      lastMessageTime: "12:00",
      unreadCount: 1,
    },
  ];

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
        <FlatList data={chats} renderItem={({ item }) => <ChatItem chat={item} />} />
      </View>
      <BottomTab />
    </View>
  );
};
