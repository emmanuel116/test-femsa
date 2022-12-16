import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import formatNumbers from "../utils/formatNumber";

export default function Box({ number }: { number: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Diciembre</Text>
        <Text style={styles.points}>{formatNumbers(number, 2)} pts</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 25,
    marginBottom: 25,
  },
  box: {
    backgroundColor: "#3A50F5",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width: "80%",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  points: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30,
  },
});
