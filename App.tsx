import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Image } from 'react-native';

export default function App() {

 
  return (
    

    <View style={styles.container}>
      <TextInput placeholder="Send message to Bro" style={{borderColor:'black' }}></TextInput>
      <button>Send</button>
      <Image style={{ width:250, height:150}}
       source = {require('./assets/bro1.png')} />
      <Text>Hey Bro 1234</Text>
    </View>
  );
}


const ImagesExample = () => (
  <Image source = {require('D:/React Projects/mykabi/assets/bro1.png')} />
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
