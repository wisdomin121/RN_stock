import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { HometoSearch } from '../'

export default function MyLists() {
  return(
    <View style={styles.mylistview}>
      <Text style={styles.mylisttitle}>
        My List
      </Text>

      <View>
        <Text style={styles.numsymbol}>0 symbol</Text>

        <View style={styles.symbollist}>
          <Text style={styles.mylistcontent}>You're not following anything</Text>
          <Button
            title="+ ADD SYMBOL"
            color="#CA9FE1"
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  mylistview: {
    borderWidth: .5,
    borderRadius: 5,
    margin: 5,
    padding: 10
  },
  mylisttitle: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 5
  },  
  numsymbol: {
    color: '#ABABAB',
    marginLeft: 5
  },
  mylistcontent: {
    textAlign: 'center',
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold'
  },
  symbollist: {
    margin: 10
  }
});