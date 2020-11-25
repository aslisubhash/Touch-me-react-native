import React, {useState} from "react";
import {Text, StyleSheet, View, TouchableOpacity,} from "react-native"

const App = ()=>{
  const  [randomColor, setRandomColor] = useState("rgb(12, 100 , 136)");


  return (
    <>
    <View style={[styles.container,{backgroundColor:randomColor}]}>
    <Text style={styles.text}>tap me</Text>
    </View>
    </>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    fontSize: 20,
    backgroundColor: "#BB2CD9",
    paddingVertical: 10,
    paddingHorizontal:40,
    color: "#FFFFFF",
    borderRadius: 10,
    textTransform: "uppercase"
  }

})