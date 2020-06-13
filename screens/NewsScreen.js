import React from 'react';
import _ from "lodash";
import { useSelector } from "react-redux";
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { GeneralNews } from '../components/GeneralNews';

export default function NewsScreen() {
  const generalnews = useSelector(state => state.generalnews);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {_.map(generalnews, gnews => <GeneralNews key={gnews.id} gnews={gnews}/>)}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: 'white'
  }
});
