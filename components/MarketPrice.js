import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function MarketPrice({ price, stock }) {
  const compared = price.c-price.pc;
  const percent = (compared/price.c)*100;

  return(
    <View>
      <View style={styles.priceview}>
        <Text style={styles.curprice}>{price.c}</Text>
        <Text style={styles.exchange}>{stock.exchange} ({stock.currency})</Text>
        <Text style={styles.atclose}>At close</Text>
        
        {compared > 0 ? 
          <Text style={styles.pricec}>+{compared.toFixed(2)} (+{percent.toFixed(2)}%)</Text> :
          <Text style={styles.pricepc}>{compared.toFixed(2)} ({percent.toFixed(2)}%)</Text>
        }
      </View>

      <View style={styles.chartview}>
        <Image
          source={require('../chart.jpg')}
          style={styles.image}
        />
      </View>

      <View style={styles.keyview}>
        <Text style={styles.title}>Key statistics</Text>
        <View style={styles.keyvalue}>
          <Text style={styles.key}>Prev Close  <Text style={styles.value}>{price.pc}</Text></Text>
          <Text style={styles.key}>Open  <Text style={styles.value}>{price.o}</Text></Text>
          <Text style={styles.key}>Low  <Text style={styles.value}>{price.l}</Text></Text>
          <Text style={styles.key}>High  <Text style={styles.value}>{price.h}</Text></Text>
        </View>
      </View>

      <View style={styles.keyview}> 
        <Text style={styles.title}>Company Info</Text>
        <View style={styles.keyvalue}>
          <Text style={styles.key}>Country  <Text style={styles.value}>{stock.country}</Text></Text>
          <Text style={styles.key}>IPO  <Text style={styles.value}>{stock.ipo}</Text></Text>
          <Text style={styles.key}>Phone  <Text style={styles.value}>{stock.phone}</Text></Text>
          <Text style={styles.key}>WebURL  <Text style={styles.value}>{stock.weburl}</Text></Text>
          <Text style={styles.key}>FinnhubIndustry  <Text style={styles.value}>{stock.finnhubIndustry}</Text></Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  priceview: {
    margin: 10,
  },
  chartview: {
    margin: 10,
    paddingBottom:10,
    borderBottomWidth: .5,
  },
  keyview: {
    borderBottomWidth: .5,
    borderColor: '#ABABAB'
  },
  curprice: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  exchange: {
    color: '#ABABAB',
    fontSize: 10,
    marginBottom: 10
  },
  atclose: {
    fontSize: 10,
    fontWeight: 'bold'
  },
  pricec: {
    color: '#6046E1'
  },
  pricepc: {
    color: 'tomato'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5
  },
  keyvalue: {
    margin:10,
    padding: 10,
    borderWidth: .5,
    borderColor: '#ABABAB',
    borderRadius: 5
  },
  key: {
    fontWeight: 'bold'
  },
  value: {
    fontWeight: 'normal'
  },
  image: {
    height: 200,
    width: 350
  }
});