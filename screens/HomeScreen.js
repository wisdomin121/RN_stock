import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from "react-redux";

export default function HomeScreen() {
  const rates = useSelector(state => state.rates);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>STOCK</Text>

      <View>

      </View>
      <Text style={styles.test}>aa{rates['JPY']}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    textAlign: "center"
  }
});
