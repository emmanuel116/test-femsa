import { View, Text, Image, TouchableOpacity } from "react-native";
import { Product } from "../types";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import formatNumbers from "../utils/formatNumber";
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

export default function Row({
  data,
  navigation,
}: {
  data: Product;
  navigation: any;
}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Product", { data: data })}
      style={styles.row}
    >
      <Image style={styles.image} source={{ uri: data.image }} />
      <View style={styles.text}>
        <Text style={styles.product}>{data.product}</Text>
        <Text style={styles.date}>
          {moment(data.createdAt).format("DD [de] MMMM, YYYY")}
        </Text>
      </View>
      <View style={styles.pointsContainer}>
        {data.is_redemption ? (
          <AntDesign
            name="minus"
            size={12}
            color="red"
            style={{ marginRight: 2 }}
          />
        ) : (
          <AntDesign
            name="plus"
            size={12}
            color="green"
            style={{ marginRight: 2 }}
          />
        )}
        <Text>{formatNumbers(data.points, 0)}</Text>
        <Entypo name="chevron-right" size={18} color="black" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },

  text: {
    width: "60%",
  },

  product: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  date: {
    fontWeight: "100",
    fontSize: 11,
  },

  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
