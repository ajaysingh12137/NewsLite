import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Card from './Card';

const Search = () => {
  const navigation = useNavigation();
  const [searchtext, setsearchtext] = useState('');
  const [Data, setData] = useState([]);

  const searchnews = async (text: React.SetStateAction<string>) => {
    setsearchtext(text);
    if (text.length > 2) {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=8f8674294315484180c71b20dc1dade9&q=${text}`,
      );
      const data = await response.json();
      setData(data.articles);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 0.2,
          elevation: 500,
          shadowColor: 'blue',
          borderTopWidth: 0,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/507/507257.png',
            }}
            style={{height: 20, width: 20, margin: 10, tintColor: 'black'}}
          />
        </TouchableOpacity>
        <TextInput
          focusable={true}
          value={searchtext}
          placeholder="Enter Your Query"
          placeholderTextColor={'grey'}
          onChangeText={text => {
            searchnews(text);
          }}
          style={{color: 'black', padding: 10, fontSize: 16}}
        />
        <Image
          source={require('../../images/search.png')}
          style={{
            height: 25,
            width: 25,
            position: 'absolute',
            right: 10,
          }}
        />
      </View>
      <FlatList
        data={Data}
        renderItem={({item, index}) => {
          return <Card item={item} navigation={navigation} />;
        }}
      />
    </SafeAreaView>
  );
};

export default Search;
