import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: "#8E2835",
  secondary: "#8E2835",
  accent: "#8E2835",

  success: "#00C851",
  error: "#ff4444",

  black: "#171717",
  white: "#FFFFFF",
  background: "#FFFFFF",
};

export const SIZES = {
  base: 10,
  width,
  height,
};
