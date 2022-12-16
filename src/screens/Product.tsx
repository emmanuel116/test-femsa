import { StyleSheet, View, Image, Dimensions } from "react-native";
import { Product } from "../types";
import Title from "../components/Title";
import Btn from "../components/Button";
import moment from "moment";

moment.locale("es", {
  months:
    "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split(
      "_"
    ),
  monthsShort:
    "Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.".split("_"),
  weekdays: "Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado".split("_"),
  weekdaysShort: "Dom._Lun._Mar._Mier._Jue._Vier._Sab.".split("_"),
  weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sa".split("_"),
});

export default function Products({
  route,
  navigation,
}: {
  route: {
    params: {
      data: Product;
    };
  };
  navigation: any;
}) {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title type="h1">{data.product}</Title>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: data.image }} style={styles.image} />
      </View>
      <View style={styles.textCointer}>
        <Title type="">Detalles del producto:</Title>
        <Title type="h1">{`Comprado el ${moment(data.createdAt).format(
          "DD [de] MMMM, YYYY"
        )}`}</Title>
        {data.is_redemption ? (
          <Title type="">Con esta compra canjeaste:</Title>
        ) : (
          <Title type="">Con esta compra acumulaste:</Title>
        )}
        <Title type="h1">{`${data.points} puntos`}</Title>
        <Btn full title="Aceptar" onPress={() => navigation.navigate("Home")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  header: {
    backgroundColor: "#D1D6FD",
    paddingTop: 80,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },

  imageContainer: {
    alignItems: "center",
  },
  image: {
    marginTop: 25,
    width: Dimensions.get("window").width - 50,
    height: Dimensions.get("window").width - 50,
    borderRadius: 15,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  textCointer: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    flex: 1,
    justifyContent: "space-between",
  },
});
