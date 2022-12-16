import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import Home from "../screens/Home";
import Product from "../screens/Product";

const Stack = createNativeStackNavigator();

const config = {
  screens: {
    Home: "/",
    Product: "/product/:id",
  },
};

const linking = {
  prefixes: ["exp://"],
  config,
};

export default function App() {
  return (
    <NavigationContainer fallback={<Text>Loading...</Text>}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Product" component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
