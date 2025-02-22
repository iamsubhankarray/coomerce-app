import { FlatList, Image, StyleSheet, TextInput } from "react-native";
import { Text, View } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Header from "../component/Header";
import Catagory from "../component/Catagory";
import Products from "../component/Products";
import data from "../src/data.json";

import { useState } from "react";
import axios from "axios";

// <<<MAIN FUNCTION START>>>
export default function HomeScreen(props) {
  const [selectedcategory, setSelectedCategory] = useState(null);
  const [productItems, setproductitems] = useState([]);
  const [search, setSearch] = useState("");
  const filterData = productItems.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
  );
  const category = ["men", "women", "kids", "toys", "electronics"];
  axios
    .get("https://fakestoreapi.com/products?limit=10")
    .then((res) => setproductitems(res.data))

    .catch((err) => console.log(err));

  return (
    // <<<HEADER COMPONENT FROM COMPONENT/HEAADER >>>

    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>

      <View style={styles.inputContainer}>
        <View style={{ flex: 0.2, alignItems: "center" }}>
          <EvilIcons name="search" size={30} color="grey" />
        </View>
        <TextInput
          placeholder="search"
          value={search}
          onChangeText={setSearch}
          style={styles.input}
        />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.title}>Ecommerce App</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={category}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <Catagory item={item} />}
      />

      {/* <<< FlatList ITEM WITH BODY OF THE PAGE>>>     */}

      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={filterData}
        renderItem={({ item }) => <Products item={item} />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // backgroundColor: "lightgrey"
  },
  header: {
    marginTop: 35,
  },
  title: {
    fontSize: 25,
    // fontFamily:"arial",
    fontWeight: "500",
    color: "orange",
    marginTop: 10,
  },
  inputContainer: {
    backgroundColor: "white",
    height: 40,
    // marginTop: 10,
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderWidth:.5,
    borderColor:"grey",

    paddingHorizontal: 10,
  },
  input: {
    fontSize: 15,
    flex: 1,
    alignSelf: "center",
   
  },
});
