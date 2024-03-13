import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Newsview from './Newsview';
import {useNavigation} from '@react-navigation/native';

const card = ({item, navigation}: {item: any; navigation: any}) => {
  // console.log(item);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{margin: 10}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Newsview', {url: item.url})}>
          <Image
            source={{
              uri: item.urlToImage
                ? item.urlToImage
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHL2lojEOgh1guw1tnpXnJYffRV1IVQ6OmLQ&usqp=CAU',
            }}
            style={{
              height: 250,
              width: '100%',
              resizeMode: 'stretch',
              borderRadius: 10,
            }}
          />
        </TouchableOpacity>
        <View style={{margin: 5}}>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontWeight: '500',
            }}>
            {item.source.name}
          </Text>

          <Text
            style={{
              marginTop: 5,
              paddingBottom: 5,
              fontSize: 20,
              fontWeight: '700',
              color: 'black',
            }}>
            {item.title}
          </Text>

          <Text style={{paddingBottom: 8, fontSize: 15}}>
            {item.description}
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{paddingBottom: 3, fontSize: 15, color: 'black'}}>
              {item.author}
            </Text>
            <Text style={{paddingBottom: 3, fontSize: 15}}>
              {item.publishedAt.toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata',
              })}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Newsview', {url: item.url})}
            style={{
              backgroundColor: '#DD0B12',
              width: 100,
              height: 35,
              justifyContent: 'center',
              borderRadius: 10,
              opacity: 0.9,
            }}>
            <Text
              style={{
                padding: 5,
                textAlign: 'center',
                color: 'white',
                fontSize: 15,
              }}>
              Read More...
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default card;
