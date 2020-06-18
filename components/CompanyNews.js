import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export const CompanyNews = ({ cnews }) => {
  const datetime = cnews.datetime * 1000;
  const real_time = new Date(datetime);

  return(
    <TouchableOpacity style={styles.total} onPress={() => Linking.openURL(cnews.url)}>
      <View style={styles.left}>
        <Text style={styles.headline}>
          {cnews.headline}
        </Text>
        <Text style={styles.date}>
          {(real_time.getMonth()+1) + '월 ' + real_time.getDate() + '일'}
        </Text>
      </View>

      <View style={styles.right}>
        <Image
          style={styles.image}
          source={cnews.image ? {uri: cnews.image} : null} 
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  total: {
    borderBottomWidth: .5,
    borderBottomColor: '#ABABAB',
    flexDirection: "row",
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 10
  },
  headline: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#7F7F7F',
    margin: 5
  },
  date: {
    color: '#ABABAB',
    margin: 5
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    margin: 5
  },
  left: {
    flex: 0.8,
    justifyContent: "center"
  },
  right: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
  }
});