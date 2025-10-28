import { theme } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    marginTop: theme.spacing.md,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.base,
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.09)",
    backgroundColor: theme.colors.white,
  },
  userName: {
    fontSize: theme.fontSizes.h4,
    fontWeight: "bold",
    color: theme.colors.primary,
  },
  lastMessage: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.textSecondary,
    fontWeight: "600",
  },
  listContent: {
    paddingHorizontal: theme.spacing.md,
  },
  backButton: {
    marginRight: theme.spacing.sm,
    marginLeft: theme.spacing.sm,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: theme.spacing.sm,
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: theme.spacing.xs,
    borderTopWidth: 2,
    borderTopColor: theme.colors.gray,
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.md,
  },
  input: {
    flex: 1,
    fontSize: theme.fontSizes.body,
    fontWeight: "600",
    color: theme.colors.primary,
    paddingHorizontal: theme.spacing.sm,
  },
  plusButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.gray,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
  },
});
