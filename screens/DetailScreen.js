import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, Text } from 'react-native';

import { fetchStock } from "../actions/index";

export default function DetailStock({ route }) {
  const dispatch = useDispatch();
  const symbol = route.params.symbol;
  useEffect(() => {{
    dispatch(fetchStock(symbol));
  }},[]);

  const stock = useSelector(state => state.stock);

  return(
    <View style={styles.container}>
      <Text style={styles.name}>
        {stock.name}   
        <Text style={styles.ticker}>
          {stock.ticker}
        </Text>
        
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10
  },
  ticker: {
    fontSize: 15,
    fontWeight: 'normal',
    borderWidth: 1,
    margin: 10
  }
})