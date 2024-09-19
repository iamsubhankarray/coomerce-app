import { View,Text, FlatList } from "react-native";
import Header from '../component/Header'
import Accounts from "../component/Accounts";

function AccountScreen() {
    return (
      <View style={{alignItems:"center"}} >
        <View style={{marginTop:35}}>
        <Header/>
        </View>
        <View>
          <FlatList
          showsVerticalScrollIndicator={false}
          data={[1,]}
          renderItem={()=><Accounts/>}/>
        </View>
        
      </View>
    );
  }
  export default AccountScreen