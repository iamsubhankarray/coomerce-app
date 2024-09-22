import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../component/Header";
import { useRoute } from "@react-navigation/native";

import { useDispatch } from "react-redux";
import { add_to_Cart } from "../redux/cartSlice";

const ProductDetails = (props) => {
  const dispatch = useDispatch();

  const route = useRoute();
  const item = route.params.item;

  const handleAddToCart = () => {
    // Strip out the rating if it's not needed in the cart
    const serializableItem = {
      id: item.id,
      title: item.title,
      price: item.price,
      description: item.description,
      image: item.image, // This is just a URI string, so it’s fine
      // category: item.category,
      // You can include the rating if you really need it, but it's not necessary for adding an item to the cart.
    };

    dispatch(add_to_Cart(serializableItem)); // Dispatch the sanitized object
    props.navigation.navigate("cart");
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 35 }}>
        <Header />
      </View>
      <View>
        <Image
          source={{ uri: item.image }}
          style={{
            width: "95%",
            height: 350,
            alignSelf: "center",
            borderRadius: 20,
          }}
        />
      </View>
      <View style={{ marginVertical: 20 }}>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 18,
            fontWeight: 350,
          }}
        >
          ${item.price}
        </Text>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 15,
            fontWeight: 350,
          }}
        >
          description:  {item.description}
        </Text>
      </View>
      <View style={{  bottom: -110 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "orange",
            height: 50,
            width: "60%",
            alignSelf: "center",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 15,
          }}
          onPress={handleAddToCart}
        >
          <Text
            style={{
              textAlignVertical: "center",
              color: "white",
              fontWeight: 500,
              fontSize: 20,
            }}
          >
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",

    textAlign: "center",
  },
});
