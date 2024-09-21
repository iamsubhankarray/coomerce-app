import { View, Text, Image } from 'react-native'
import { useSelector } from 'react-redux'

const Accounts = () => {
     const user =useSelector(state=>state.user)
     

  

 

  return (
    <View style={{justifyContent:"center",alignItems:"center"}}>
      <Image
      source={require('../assets/dp.png')}
      style={{width:256,height:256,marginVertical:50,}}/>
      <Text style={{fontSize:35,fontWeight:"bold"}}>{user[0]?.username}</Text>
      <Text style={{fontSize:15,fontWeight:"bold"}}>{user[0]?.email}</Text>
      <Text style={{fontSize:15,fontWeight:"bold"}}>{user[0]?.mobile}</Text>
    </View>
  )
}

export default Accounts