import { StyleSheet } from "react-native";

import { theme } from "@/constants/theme";

export const styles = StyleSheet.create({
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
  backButton: {
    marginRight: theme.spacing.sm,
    marginLeft: theme.spacing.sm,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
