import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, View,TouchableHighlight } from "react-native";

export default function App() {
  const [bgColor, setBgColor] = useState(randomHex());

  var styles = {
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      
    }
  };

  function randomHex() {
    //console.log("Func Called");
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Button title="Change color" onPress={() => setBgColor(randomHex())} />
      <View style={{paddingTop:20}}>
      <TouchableHighlight >
      <Button 
      title='view message'
      onPress={() => {alert('oh hello there!')}}
      />

      </TouchableHighlight>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}



