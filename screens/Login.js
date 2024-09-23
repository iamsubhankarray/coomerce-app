import { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import axios from "axios"
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/userSlice";
export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  


  const handleSubmit = async() => {


    const loginfo = {
      email,
      password,
    }

   
    try {
      const res =await axios.post('http://192.168.0.210:8080/login',loginfo)
      if (res.data.status===200) {
        props.navigation.navigate("home_stack",{screen:'home_stack'})
        dispatch(loginUser(res.data.user))
        setEmail("")
        setPassword("")
        

        
      }
      
    } catch (error) {
      console.log(error);
      
      
    }

  }








  return (

    <View style={styles.containerLight}>
      <KeyboardAvoidingView>
        <Image source={require(".././assets/logIn.png")} style={styles.logo} />
        <Text style={styles.header}>logIn</Text>

        <View style={styles.field}>
          <TextInput
            style={styles.input}
            placeholder="enter user email"
            value={email}
           
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="enter password"
            
            value={password}
            onChangeText={setPassword}

          />
        </View>
        <View style={styles.touch}>
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.btn}>logIn</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", marginVertical: 20, }}>
          <Text onPress={() => props.navigation.navigate("register")}>
            not a user <Text style={styles.link}>register</Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",

  },
  logo: {
    height: 320,
    width: 320,
    position: "absolute",
    top: 0,
    marginTop: 10,
  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
    color: "skyblue",
    marginTop: 300,
  },
  input: {
    width: 350,
    height: 50,
    borderColor: "skyblue",
    borderWidth: 2,
    borderRadius: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10,
  },
  field: {
    justifyContent: "center",
    alignItems: "center",
  },
  touch: {
    backgroundColor: "skyblue",
    width: 350,
    height: 50,
    borderRadius: 20,
    marginTop: 10,
  },
  btn: {
    textAlign: "center",
    fontWeight: "bold",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: 10,
  },
  link: {
    color: "red",
  },
});


