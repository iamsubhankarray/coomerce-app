import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import AntDesign from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TabIconComponent = ({ name }) => {
  const [cart, setCart] = useState({});
  const cartFromRedux = useSelector((state) => state.cart);

  const getData = async () => {
    if (cartFromRedux.length > 0) {
      setCart(cartFromRedux);
    } else {
      try {
        const storedCart = await AsyncStorage.getItem('cart');
        if (storedCart !== null) {
          setCart(storedCart);
        }
      } catch (error) {
        console.log('Error fetching cart from AsyncStorage:', error);
      }
    }
  };

  useEffect(() => {
    getData();
  }, [cartFromRedux]);
  // console.log(cart);
  

  return (
    <View style={{ position: 'relative' }}>
      {cart?.length < 30 && (
        <View
          style={{
            position: 'absolute',
            right: 0,
            top: -10,
            backgroundColor: 'red',
            width: 15,
            height: 15,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{ fontSize: 10, fontWeight: 'bold', color: 'white' }}
          >
            {cart.length}
          </Text>
        </View>
      )}
      <AntDesign name={name} size={35} color="black" />
    </View>
  );
};

export default TabIconComponent;
