import { View, Text, Image } from 'react-native'
import React from 'react'

const Accounts = () => {
  return (
    <View style={{justifyContent:"center",alignItems:"center"}}>
      <Image
      source={require('../assets/dp.png')}
      style={{width:256,height:256,marginVertical:50,}}/>
      <Text style={{fontSize:35,fontWeight:"bold"}}>name</Text>
      <Text style={{fontSize:15,fontWeight:"bold"}}>email:test@test.com</Text>
    </View>
  )
}

export default Accounts