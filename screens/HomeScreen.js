import * as React from 'react';
import { StyleSheet, SafeAreaView, TextInput, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

import AllRates from '../components/AllRates';
import MyLists from '../components/MyLists';

export default function HomeScreen() {
  const [value, onChangeText] = React.useState('Enter the Company');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
        <FontAwesome
          style={styles.icon}
          name={"search"}
          size={18}
        />
      </View>

      <View style={styles.rates}>
        <Text style={styles.title}>
          Rates
          <Text style={styles.ratesinfo}>   (base: EUR)</Text>
        </Text>
        <AllRates />
      </View>

      <View style={styles.list}>
        <Text style={styles.title}>
          Lists
        </Text>
        <MyLists />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  search: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    borderWidth: .5,
    borderColor: '#ABABAB',
    borderRadius: 10,
    margin: 10,
    padding: 5,
    
  },
  input: { 
    flex: 1,
  },
  icon: {
    padding: 10,
    margin: 5,
    alignItems: 'center'
  },
  rates: {
    borderTopWidth: .5,
    borderBottomWidth: .5,
    borderColor: '#ABABAB'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5
  },
  ratesinfo: {
    fontSize: 10,
    fontWeight: 'normal',
    color: '#828282'
  }
});
