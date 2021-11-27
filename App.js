import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

//iOs View -> UI ViewMapped to native widgets
export default function App() {
  console.log(require('./assets/favicon.png'));

  const handlePress = () => console.log("Random change for commit");

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>WasteLess </Text>
      <TouchableHighlight onPress={() => console.log("Image Tapped")}>
        <Image
          source = {{
            width: 200,
            height: 300,
            uri:"https://picsum.photos/200/300"}}
          />
      </TouchableHighlight>
      <StatusBar style="auto" />
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
