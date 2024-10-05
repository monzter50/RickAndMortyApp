import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
function Home() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('useEffect called');
    fetch('https://rickandmortyapi.com/api')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {});
    return () => {
      console.log('useEffect cleanup');
    };
  }, [count]);
  const increment = () => {
    setCount(count - 1);
  };
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text style={styles.title}>This is the Box {count}</Text>
      <TouchableHighlight onPress={increment}>
        <View style={styles.button}>
          <Text>Touch Here</Text>
        </View>
      </TouchableHighlight>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default Home;
