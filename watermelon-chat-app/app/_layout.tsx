import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";
import { Stack } from "expo-router";
import { KeyboardProvider } from "react-native-keyboard-controller";
import "react-native-reanimated";

import { Chats } from "@/model/Chats";
import { Messages } from "@/model/Messages";
import migrations from "@/model/migrations";
import schema from "@/model/schema";

// reactotron config
if (__DEV__) {
  import("@/config/reactotronConfig").then();
}

const adapter = new SQLiteAdapter({
  schema,
  // (You might want to comment it out for development purposes -- see Migrations documentation)
  migrations,
  // (optional database name or file system path)
  // dbName: 'myapp',
  // (recommended option, should work flawlessly out of the box on iOS. On Android,
  // additional installation steps have to be taken - disable if you run into issues...)
  jsi: true /* Platform.OS === 'ios' */,
  // (optional, but you should implement this method)
  onSetUpError: (error) => {
    // Database failed to load -- offer the user to reload the app or log out
    console.error(error);
  },
});

export const database = new Database({
  adapter,
  modelClasses: [Messages, Chats],
});

export default function RootLayout() {
  return (
    <KeyboardProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </KeyboardProvider>
  );
}
