import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { REMOVE_FROM_CART } from './redux/constants'
const cartItem = ({ item }) => {
  
  const dispatch = useDispatch()
 
 const handleRemoveCart=(item)=>{

  dispatch(REMOVE_FROM_CART(item))

  
 }





  return (
    <View style={{ flexDirection: "row",
    justifyContent:"space-evenly",
    position:"relative",
    backgroundColor:"#fcdcf7",
    borderRadius:15,
    marginVertical:10
     }}>
      <Image
        source={{ uri: item.image }}
        style={{ width: 80, height: 100 }} />
      <View style={{}}>
        <Text style={{fontWeight:"bold"}}>{item.id}</Text>
        <Text>{item.price}</Text>
      </View>
      <View style={{position:"absolute",bottom:0,right:0,}}>
        <Button 
        title='remove'
        onPress={()=>handleRemoveCart(item)}/>
      </View>
    
    </View>
  )
}

export default cartItem

const styles = StyleSheet.create({})