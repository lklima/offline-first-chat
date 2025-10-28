import { StyleSheet } from "react-native";

import { theme } from "@/constants/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    maxWidth: "85%",
    backgroundColor: theme.colors.background,
    flexDirection: "row",
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    borderTopRightRadius: theme.borderRadius.xl,
    borderTopLeftRadius: theme.borderRadius.xl,
  },
  message: {
    fontSize: theme.fontSizes.body,
    fontWeight: "600",
    color: theme.colors.primary,
  },
});
