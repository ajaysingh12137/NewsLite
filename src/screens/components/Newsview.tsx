import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

const Newsview = ({navigation, route}: {navigation: any; route: any}) => {
  const {url} = route?.params;
  // console.log(url);
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
      <WebView source={{uri: url}} style={{flex: 1,}} />
    </SafeAreaView>
    
  );
};

export default Newsview;

const styles = StyleSheet.create({});
