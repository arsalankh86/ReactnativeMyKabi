import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Image } from 'react-native';

export default function App() {

 
  return (
    

    <View style={styles.container}>
      <TextInput placeholder="Send message to Bro" style={{borderColor:'black' }}></TextInput>
      <Image style={{ width:250, height:150}}
       source = {require('./assets/bro1.png')} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
