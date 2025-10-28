import { Q } from "@nozbe/watermelondb";
import { withObservables } from "@nozbe/watermelondb/react";
import { FlatList } from "react-native";

import { database } from "@/app/_layout";
// components
import { ChatItem } from "../ChatItem";

const enhance = withObservables(["chats"], () => ({
  posts: database.collections.get("chats").query(Q.sortBy("createdAt", Q.desc)).observe(),
}));

const ChatListComponent = ({ chats }: { chats: Chat[] }) => {
  return <FlatList data={chats} renderItem={({ item }) => <ChatItem chat={item} />} />;
};

export const ChatList = enhance(ChatListComponent);
