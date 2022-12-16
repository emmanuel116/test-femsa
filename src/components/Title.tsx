import { StyleSheet, Text } from "react-native";

interface TitleProps {
  type?: string;
  children: string;
}

export default function Title({ children, type }: TitleProps) {
  return (
    <Text
      style={type === "h1" ? styles.h1 : type === "h2" ? styles.h2 : styles.h3}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  h2: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: "300",
  },
  h3: {
    color: "#9B9898",
    fontWeight: "bold",
  },
});
