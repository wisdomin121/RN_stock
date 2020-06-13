import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, Linking } from 'react-native';

export const GeneralNews = ({gnews}) => {
  return(
    <TouchableOpacity style={styles.div}
          onPress={() => Linking.openURL(gnews.url)}>
      <Text style={styles.headline}>
        {gnews.headline}
      </Text>
      <Image
        style={styles.image}
        source={{uri: gnews.image}}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  div: {
    borderBottomWidth: 1,
    borderBottomColor: '#ABABAB',
    margin: 10,
    flexDirection: "row"
  },
  headline: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#7F7F7F',
    flex: 0.7,
    margin: 5
  },
  image: {
    width: 50,
    height: 50,
    flex: 0.3,
    borderRadius: 10,
    margin: 5
  },
  date: {
    color: '#ABABAB',
  }
});