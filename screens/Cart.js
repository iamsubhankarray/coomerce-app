import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Header from "../component/Header";
import CartItem from "../component/CartItem.js";
import { useSelector } from "react-redux";

function CartScreen(item, props) {
  const cartData = useSelector((state) => state.cart);
  const handlechechout = () => {
    props.navigation.navigate("process", { cartData });
  };

  return (
    <View style={{ justifyContent: "center" }}>
      <View
        style={{
          marginTop: 35,
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Header iscart={true} />
      </View>
      <View style={{ marginVertical: 25, marginHorizontal: 25 }}>
        <FlatList
          data={cartData}
          keyExtractor={(item, index) => index}
          renderItem={(item) => <CartItem item={item} />}
        />
      </View>
      <View style={{ position:"static",bottom: -600,}}>
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
          onPress={handlechechout}
        >
          <Text style={{ fontSize: 35, color: "white" }}>check out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default CartScreen;
