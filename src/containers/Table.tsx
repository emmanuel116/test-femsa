import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { Product } from "../types";
import Row from "../components/Row";
import Btn from "../components/Button";

export default function Box({
  data,
  navigation,
}: {
  data: Product[];
  navigation: () => void;
}) {
  const [active, setActive] = useState("Todos");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  const handleData = (type: string) => {
    if (type === "Ganados") {
      setProducts(data.filter((item) => item.is_redemption === false));
      setActive("Ganados");
    } else if (type === "Canjeados") {
      setProducts(data.filter((item) => item.is_redemption === true));
      setActive("Canjeados");
    } else {
      setProducts(data);
      setActive("Todos");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.table}>
        {products.length > 0 ? (
          products
            .slice(0, 5)
            .map((item) => (
              <Row key={item.id} data={item} navigation={navigation} />
            ))
        ) : (
          <Text>No hay datos</Text>
        )}
      </View>
      <View style={styles.buttonBox}>
        {active !== "Todos" ? (
          <Btn
            full={true}
            title={"Todos"}
            onPress={() => handleData("Todos")}
          />
        ) : (
          <>
            <Btn title={"Canjeados"} onPress={() => handleData("Canjeados")} />
            <Btn title={"Ganados"} onPress={() => handleData("Ganados")} />
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  table: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginTop: 25,
    marginBottom: 25,
  },
  buttonBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
