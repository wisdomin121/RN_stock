import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { useSelector } from "react-redux";

export default function AllRates() {
  const rates = useSelector(state => state.rates);

  return(
    <ScrollView
      horizontal={true}>
        <View style={styles.ratesview}>
          <Text style={styles.ratestext}>한국 KRW</Text>
          <Text>{rates['KRW']}</Text>
        </View>
        <View style={styles.ratesview}>
          <Text style={styles.ratestext}>미국 USD</Text>
          <Text>{rates['USD']}</Text>
        </View>
        <View style={styles.ratesview}>
          <Text style={styles.ratestext}>중국 CNY</Text>
          <Text>{rates['CNY']}</Text>
        </View>
        <View style={styles.ratesview}>
          <Text style={styles.ratestext}>일본 JPY</Text>
          <Text>{rates['JPY']}</Text>
        </View>
        <View style={styles.ratesview}>
          <Text style={styles.ratestext}>홍콩 HKD</Text>
          <Text>{rates['HKD']}</Text>
        </View>
        <View style={styles.ratesview}>
          <Text style={styles.ratestext}>대만 TWD</Text>
          <Text>{rates['TWD']}</Text>
        </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ratesview: {
    borderWidth: .5,
    borderRadius: 5,
    margin: 10,
    padding: 15
  },
  ratestext: {
    fontWeight: 'bold'
  }
});