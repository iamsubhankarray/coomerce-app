import { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";

import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [mobile, setmobile] = useState("");
  
  const navigation = useNavigation()


  const handleSubmit =async() => {
    const registerData = {
      username,
      email,
      password,
      mobile,
    }
    await axios.post('http://192.168.0.210:8080/register',registerData)
    .then(res=>console.log(res.data.message))
    .catch(err=>console.log(err))
    
   

  }



  



  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image source={require(".././assets/Register.png")} style={styles.logo} />

      <View style={styles.field}>
        <Text style={styles.header}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="enter user name"
          value={username}
          onChangeText={(e) => setusername(e)}
        />
        <TextInput
          style={styles.input}
          placeholder="enter user email"
          value={email}
          onChangeText={(e) => setemail(e)}
        />
        <TextInput
          style={styles.input}
          placeholder="enter enter password"
          keyboardType="number"
          value={password}
          onChangeText={(e) => setpassword(e)}
        />
        <TextInput
          style={styles.input}
          placeholder="enter user mobile"
          value={mobile}
          onChangeText={(e) => setmobile(e)}
        />
        <View style={styles.touch}>
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.btn}>Register</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text onPress={() => navigation.navigate('login')}>
            not a user <Text style={styles.link}>login</Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",

    // justifyContent: "center",
    // alignItems: "center",
  },
  logo: {
    height: 320,
    width: 320,
    position: "absolute",
    top: 0,
    // marginTop: 100,
  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
    color: "skyblue",

  },
  input: {
    // backgroundColor: "#969693",
    width: 350,
    height: 50,
    borderColor: "skyblue",
    borderWidth: 2,
    borderRadius: 20,
    textAlign: "center",
    fontWeight: "bold",
    margin: 5,
  },
  field: {

    justifyContent: "center",
    alignItems: "center",
    marginTop: 350,
  },
  touch: {
    backgroundColor: "skyblue",
    width: 350,
    height: 50,
    borderRadius: 20,
    marginTop: 20,
  },
  btn: {
    textAlign: "center",
    fontWeight: "bold",

    justifyContent: "center",
    alignContent: "center",
    paddingTop: 10,
  },
  link: {
    color: "red"
  }
});
