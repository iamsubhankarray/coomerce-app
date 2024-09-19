import * as React from 'react';
import { useContext } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';
import AccountScreen from './screens/account';
import CartScreen from './screens/Cart';
import HomeScreen from './screens/Home';
import Login from './screens/Login'
import Register from './screens/Register'
import ProductDetails from './screens/ProductDetails';
import Store from './redux/store'
import { Provider, useSelector } from 'react-redux';
import TabIconComponent from './component/TabIconComponent';





const HomeStack = () => {
  return (


    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='ProductDetails' component={ProductDetails} />
    </Stack.Navigator>

  )
}
const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='login' component={Login} />
      <Stack.Screen name='register' component={Register} />
      {/* <Stack.Screen name='ProductDetails' component={ProductDetails} /> */}
    </Stack.Navigator>)

}





const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <Provider store={Store}>





      <NavigationContainer>
        <Tab.Navigator screenOptions={{ tabBarShowLabel: false, headerShown: false, tabBarHideOnKeyboard: true, }}initialRouteName='loginStack'>
          <Tab.Screen name="home_stack" component={HomeStack} options={{ tabBarIcon: () => <AntDesign name="home" size={35} color="black" /> }} />
          <Tab.Screen name="loginStack" component={LoginStack} options={{ tabBarIcon: () => <AntDesign name="linechart" size={35} color="black" /> }} />
          <Tab.Screen name="cart" component={CartScreen} options={{
            tabBarIcon: () => <TabIconComponent name={"shoppingcart"} />
          }} />
          <Tab.Screen name="account" component={AccountScreen} options={{ tabBarIcon: () => <AntDesign name="user" size={35} color="black" /> }} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>


  );
}