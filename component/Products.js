import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Products = ({ item, index, }) => {
  const [like, setlike] = useState(false)
  const navigation = useNavigation()



  return (
    <View style={{  alignItems: "center", marginHorizontal: 25, marginTop: 20 }}>

      <TouchableOpacity onPress={() => { navigation.navigate("ProductDetails", { item }) }}>
        <Image

          source={{ uri: item.image }}

          style={{ width: 128, height: 200, borderRadius: 20, }}
        />
        <Text style={{ fontSize: 17,width:150,marginVertical:10,fontWeight:"bold", color: "orange",flexWrap:"wrap" }}>{item.title.substring(0,35)+"..."}</Text>
        <Text style={{ fontSize: 12, color: "black",flexWrap:"wrap",height:100,width:100, }}>description:{item.description.substring(4,50)+"..."}</Text>
        <Text style={{ fontSize: 12,fontWeight:"bold", color: "black", }}>RS:{Math.round(item.price * 85)}</Text>
        <Text style={{ fontSize: 12, color: "black",flexWrap:"wrap"}}>Remaining:{item.rating.count}</Text>
        <TouchableOpacity style={{
          position: "absolute",
          top:10, right: 10, height: 25, width: 25,
          borderRadius: 20,
          justifyContent: "center",
          alignContent: "center",
        }} onPress={() => setlike(!like)}>
          {like ?
            <AntDesign name="heart" size={20} color="red" /> :
            <AntDesign name="heart" size={25} color="lightgrey" />}
        </TouchableOpacity>
      </TouchableOpacity>
    </View>

  )
}

export default Products

const styles = StyleSheet.create({})