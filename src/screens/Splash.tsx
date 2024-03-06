import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  StatusBar,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Home from './Home';

const Splash = ({navigation}: {navigation: any}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(Home);
    }, 3000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0242A',
      }}>
      <View style={{}}>
        <Animated.Image
          style={{
            height: 400,
            width: 350,
            resizeMode: 'stretch',
            borderRadius: 50,
          }}
          source={{
            uri: 'https://img.freepik.com/free-vector/exciting-news-concept-illustration_114360-7158.jpg?w=740&t=st=1698667457~exp=1698668057~hmac=7769b6ed088410a64d037c372779d54dca7a9d57aa6be99c929ec141b7d38c04',
          }}
        />
      </View>
      <StatusBar barStyle={'default'} backgroundColor={'#E0242A'} />

      <TouchableOpacity onPress={() => navigation.navigate(Home)}>
        <Animated.Image
          source={require('../images/newslogo.png')}
          style={{
            height: 50,
            width: 250,
            resizeMode: 'stretch',
            tintColor: 'white',
            marginTop: 70,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Splash;
