import { Model } from "@nozbe/watermelondb";
import { date, field, readonly, text } from "@nozbe/watermelondb/decorators";
import { Associations } from "@nozbe/watermelondb/Model";

export class Messages extends Model {
  static table = "messages";

  static associations: Associations = {
    chats: { type: "belongs_to", key: "chat_id" },
  };

  @text("message") message!: string;
  @field("is_source_user") isSourceUser!: boolean;
  @readonly @date("created_at") createdAt!: Date;
  @readonly @date("updated_at") updatedAt!: Date;
}
