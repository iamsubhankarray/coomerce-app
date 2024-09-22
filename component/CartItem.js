import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import {remove_from_Cart} from '../redux/cartSlice'


cartItem = ({ item }) => {
  
  
  const dispatch = useDispatch()
 
 const handleRemoveCart=()=>{

  dispatch(remove_from_Cart(item.item))
  

  
 }





  return (
    <View style={{ flexDirection: "row",
    justifyContent:"space-evenly",
    position:"relative",
    borderRadius:15,
    // marginVertical:10
     }}>
      <Image
        source={{ uri: item.item.image }}
        style={{ width: 80, height: 100 }} />
      <View style={{}}>
      </View>
      <View style={{marginHorizontal:50}}>

        <Text style={{fontWeight:"bold"}}>ID:{item.item.id}</Text>
        <Text style={{fontSize:25}}>{item.item.title}</Text>
        <Text>{item.item.description}</Text>
        <Text style={{fontSize:20}}>{item.item.price}</Text>
      </View>
      <View style={{position:"absolute",bottom:0,right:10,}}>
        <Button 
        title='remove'
        onPress={handleRemoveCart}/>
      </View>
    
    </View>
  )
}

export default cartItem

const styles = StyleSheet.create({})