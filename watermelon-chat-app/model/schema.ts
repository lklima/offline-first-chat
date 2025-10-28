import { appSchema, tableSchema } from "@nozbe/watermelondb";

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: "chats",
      columns: [
        { name: "user_image", type: "string" },
        { name: "user_name", type: "string" },
        { name: "last_message", type: "string" },
        { name: "last_message_time", type: "string" },
        { name: "unread_count", type: "number" },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),
    tableSchema({
      name: "messages",
      columns: [
        { name: "chat_id", type: "string", isIndexed: true },
        { name: "message", type: "string" },
        { name: "is_source_user", type: "boolean" },
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
      ],
    }),
  ],
});
