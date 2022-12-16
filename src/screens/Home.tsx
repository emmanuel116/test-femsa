import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Product } from "../types";
import Title from "../components/Title";
import Box from "../components/Box";
import Table from "../containers/Table";

export default function Home({ navigation }: { navigation: () => void }) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://6222994f666291106a29f999.mockapi.io/api/v1/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginHorizontal: 20 }}>
        <Title type={"h1"}>Bienvenido de vuelta!</Title>
        <Title type={"h2"}>Ruben Rodriguez</Title>
        <Title>TUS PUNTOS</Title>
        <Box number={products?.reduce((a, b) => a + b.points, 0) || 0} />
        <Title>TUS MOVIMIENTOS</Title>
        <Table data={products} navigation={navigation}/>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    justifyContent: "space-around",
  },
});
