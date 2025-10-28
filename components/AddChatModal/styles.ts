import { StyleSheet } from "react-native";

import { theme } from "@/constants/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: theme.spacing.md,
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: theme.spacing.md,
  },
  headerTitle: {
    fontSize: theme.fontSizes.h2,
    fontWeight: "bold",
    color: theme.colors.primary,
  },
  closeButton: {
    position: "absolute",
    right: 0,
    paddingRight: theme.spacing.md,
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    paddingHorizontal: theme.spacing.md,
    backgroundColor: theme.colors.gray,
    borderRadius: theme.borderRadius.xl,
    marginBottom: theme.spacing.lg,
  },
  input: {
    flex: 1,
    fontSize: theme.fontSizes.body,
    fontWeight: "600",
    color: theme.colors.primary,
    paddingHorizontal: theme.spacing.sm,
  },
  addButton: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.xl,
  },
  addButtonText: {
    fontSize: theme.fontSizes.body,
    fontWeight: "700",
    color: theme.colors.white,
    marginLeft: theme.spacing.sm,
  },
});
