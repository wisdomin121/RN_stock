import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 


export default function SettingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <FontAwesome 
          name={"user-circle-o"}
          size={35}
          style={styles.icon}
        />
        <Text style={styles.login}>로그인 / 가입하기</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    borderBottomWidth: .5,
    borderColor: '#ABABAB'
  },  
  icon: {
    color: '#7F7F7F'
  },
  login: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
    color: '#7F7F7F'
  }, 
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

