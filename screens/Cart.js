import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Header from "../component/Header";
import CartItem from "../component/CartItem.js";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

function CartScreen(item, props) {
  const cartData = useSelector((state) => state.cart);
  const navigation=useNavigation()
  const handlechechout = () => {
    navigation.navigate("home_stack",{screen:'process'})
  };

  return (
    <View style={{ }}>
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
      <View style={{ marginVertical: 5, marginHorizontal: 25,backgroundColor:"white",borderRadius:30,height:600}}>
        <FlatList
          data={cartData}
          keyExtractor={(item, index) => index}
          renderItem={(item) => <CartItem item={item} />}
        />
      </View>
      <View style={{top:700,position:"absolute",}}>
        <TouchableOpacity
          style={{
            backgroundColor: "orange",
            height: 80,
            width: "300%",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal:"auto"
          }}
          onPress={handlechechout}
        >
          <Text style={{ fontSize: 30, color: "white" }}>check out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default CartScreen;
