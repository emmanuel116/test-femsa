import { Pressable, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function Btn({
  title,
  onPress,
  full,
}: {
  title: string;
  onPress: () => void;
  full?: boolean;
}) {
  return (
    <Pressable
      style={full ? styles.buttonFull : styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#3A50F5",
    width: "48%",
  },
  buttonFull: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#3A50F5",
    width: "100%",
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
