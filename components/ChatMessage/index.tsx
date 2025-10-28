import { Text, View } from "react-native";

// styles
import { theme } from "@/constants/theme";
import { styles } from "./styles";

interface Props {
  message: Message;
}

export const ChatMessage = ({ message }: Props) => {
  return (
    <View
      style={[
        styles.container,
        {
          borderBottomRightRadius: message.sourceUser ? 0 : theme.borderRadius.xl,
          borderBottomLeftRadius: message.sourceUser ? theme.borderRadius.xl : 0,
          alignSelf: message.sourceUser ? "flex-end" : "flex-start",
          backgroundColor: message.sourceUser ? theme.colors.primary : theme.colors.white,
        },
      ]}
    >
      <Text
        style={[
          styles.message,
          {
            color: message.sourceUser ? theme.colors.white : theme.colors.primary,
          },
        ]}
      >
        {message.message}
      </Text>
    </View>
  );
};
