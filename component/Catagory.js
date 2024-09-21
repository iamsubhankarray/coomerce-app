import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Catagory = ({ item}) => {
  const [selectedcategory,setSelectedCategory] = useState(false)
 

  return (
    <TouchableOpacity onPress={() => setSelectedCategory(!selectedcategory)}>
      <Text style={[styles.category, selectedcategory === true && { color: "white", backgroundColor: "orange" }]}>{item}</Text>
    </TouchableOpacity>
  )
}

export default Catagory

const styles = StyleSheet.create({
  category: {
    width: 100,
    height: 50,
    fontSize: 16,
    
    backgroundColor: "grey",
    borderRadius: 10,
    textAlign: "center",
    marginHorizontal: 10,
    marginVertical: 20,
    paddingVertical: 10,
    color: "white",


  }
})