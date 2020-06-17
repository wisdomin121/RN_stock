import * as React from 'react';
import { StyleSheet, SafeAreaView, View, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

export default function SearchScreen({ navigation }) {
  const [value, onChangeText] = React.useState('Enter the Symbol');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
        <FontAwesome.Button
          style={styles.icon}
          name={"search"}
          size={18}
          backgroundColor={'#CA9FE1'}
          onPress={() => navigation.navigate('Detail')}
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

  },
});
