import React, { useEffect } from 'react';
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import { fetchStock, fetchPrice, fetchCompanyNews } from "../actions/index";
import MarketPrice from '../components/MarketPrice';
import { CompanyNews } from '../components/CompanyNews';
import { FontAwesome } from '@expo/vector-icons';

export default function DetailStock({ route }) {
  const dispatch = useDispatch();
  const symbol = route.params.symbol;
  
  useEffect(() => {{
    dispatch(fetchStock(symbol));
    dispatch(fetchPrice(symbol));
    dispatch(fetchCompanyNews(symbol));
  }},[]);

  const stock = useSelector(state => state.stock);
  const price = useSelector(state => state.price);
  const companynews = useSelector(state => state.companynews);  

  console.log(price);

  if(stock.name){
    return(
      <ScrollView style={styles.container}>
        <Text style={styles.name}>
          {stock.name}  <Text style={styles.ticker}>{stock.ticker}  </Text>    
          <FontAwesome 
            name={"star-o"}
            size={25}
            color={'#CA9FE1'}
          />
        </Text>
        <MarketPrice price={price} stock={stock}/>
        <Text style={styles.newstitle}>News</Text>
        {_.map(companynews, cnews => <CompanyNews key={cnews.id} cnews={cnews}/>)}
      </ScrollView>
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
  },
  newstitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5
  },
})