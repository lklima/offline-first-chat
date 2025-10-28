declare type Chat = {
  id: number;
  userImage: string;
  userName: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
};

declare type Message = {
  id: number;
  message: string;
  createdAt: string;
  sourceUser: boolean;
};
