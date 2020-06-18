import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, Text } from 'react-native';

import { fetchStock, fetchPrice } from "../actions/index";
import MarketPrice from '../components/MarketPrice';

export default function DetailStock({ route }) {
  const dispatch = useDispatch();
  const symbol = route.params.symbol;
  useEffect(() => {{
    dispatch(fetchStock(symbol));
    dispatch(fetchPrice(symbol));
  }},[]);

  const stock = useSelector(state => state.stock);
  const price = useSelector(state => state.price);
  
  if(stock.name){
    return(
      <View style={styles.container}>
        <Text style={styles.name}>
          {stock.name}  <Text style={styles.ticker}>{stock.ticker}</Text>
        </Text>
        <MarketPrice price={price} stock={stock}/>
      </View>
    );
  }else{
    return(
      <View style={styles.container2}>
        <Text style={styles.noresults}>No Results</Text>
        <Text style={styles.searched}>Searched symbol: {symbol}</Text>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  },
  ticker: {
    color:'#ABABAB',
    fontSize: 15,
    fontWeight: 'normal',
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  noresults: {
    fontWeight: 'bold',
    fontSize: 18
  },
  searched: {
    color: '#ABABAB'
  }
  
})