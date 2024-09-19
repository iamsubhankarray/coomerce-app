import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import AntDesign from '@expo/vector-icons/AntDesign';

const TabIconComponent=({name,})=>{
  const cartData= useSelector((state)=>state.cart)
// console.log(cartData);

return (
  <View style={{position:"relative",}}>
      {/* <Text>{storeItems.length}</Text> */}
      {cartData.length>0 &&
      <View style={{position:"absolute", right:0, top:-10,backgroundColor:"red",width:15,height:15,borderRadius:5,justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontSize:10,fontWeight:"bold",color:"white",}}>{cartData.length}</Text>
      </View>}
      <AntDesign name={name} size={35} color="black" />
    </View>)
}

export default TabIconComponent