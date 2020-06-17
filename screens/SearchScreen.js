import * as React from 'react';
import { StyleSheet, SafeAreaView, View, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 


export default function SearchScreen() {
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
});
