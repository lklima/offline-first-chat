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
  listContent: {
    paddingHorizontal: theme.spacing.md,
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
