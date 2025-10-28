import { Model } from "@nozbe/watermelondb";
import { date, field, readonly, text } from "@nozbe/watermelondb/decorators";
import { Associations } from "@nozbe/watermelondb/Model";

export class Chats extends Model {
  static table = "chats";

  static associations: Associations = {
    messages: { type: "has_many", foreignKey: "chat_id" },
  };

  @text("user_image") userImage!: string;
  @text("user_name") userName!: string;
  @text("last_message") lastMessage!: string;
  @text("last_message_time") lastMessageTime!: string;
  @field("unread_count") unreadCount!: number;
  @readonly @date("created_at") createdAt!: Date;
  @readonly @date("updated_at") updatedAt!: Date;
}
