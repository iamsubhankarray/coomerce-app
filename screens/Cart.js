import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Header from "../component/Header";
import CartItem from "../component/CartItem.js";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";




function CartScreen(item) {

  const cartData = useSelector((state) => state.reducer)
  console.log(cartData);
  
 
  






  return (
    <View style={{ justifyContent:"center"}} >
      <View style={{ marginTop: 35, justifyContent:"center",alignItems:"center",position:"relative"}}>
        <Header iscart={true} />
      </View>
      <View style={{ marginVertical: 25, marginHorizontal: 25 }}>
        <FlatList
        
          data={cartData}
          keyExtractor={(item, index) => (index)}
          renderItem={(item) => (<CartItem item={item} />)} />


      </View >
      <TouchableOpacity style={{backgroundColor:"orange",
        width:350,height:75,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,
        marginHorizontal:20,
        position:"absolute",
        bottom:-450,
        
        }}>
            <Text style={{fontSize:45,color:"white"}}>check out</Text>
          </TouchableOpacity>

    </View>
  );
}
export default CartScreen