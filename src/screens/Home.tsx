import {
  ActivityIndicator,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Card from './components/Card';

const Home = ({navigation}: {navigation: any}) => {
  const [Data, setData] = useState([]);
  const [Selected, setSelected] = useState(0);
  const [Loading, setLoading] = useState(false);
  const [Category, setCategory] = React.useState([
    {
      id: 1,
      name: 'Top Headlines',
      category: 'general',
    },
    {
      id: 5,
      name: 'Sports',
      category: 'sports',
    },
    {
      id: 2,
      name: 'Business',
      category: 'business',
    },
    {
      id: 3,
      name: 'Entertainment',
      category: 'entertainment',
    },
    {
      id: 4,
      name: 'Health',
      category: 'health',
    },
    {
      id: 6,
      name: 'Science',
      category: 'science',
    },
    {
      id: 7,
      name: 'Technology',
      category: 'technology',
    },
  ]);

  const getData = async () => {
    setLoading(true);
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=8f8674294315484180c71b20dc1dade9&category=${Category[Selected].category}`,
    );
    const data = await response.json();
    setData(data.articles);
    setLoading(false);
  };

  const getData2 = async (category: string) => {
    setLoading(true);
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=8f8674294315484180c71b20dc1dade9&category=${category}`,
    );
    const data = await response.json();
    setData(data.articles);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />

      {Loading ? (
        <ActivityIndicator
          size={45}
          color={'#DD0B12'}
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'white',
          }}
        />
      ) : (
        <>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 15,
              marginTop: 10,
              marginRight: 10,
              alignItems: 'center',
            }}>
            <Image
              source={require('../images/newslogo.png')}
              style={{height: 25, width: 150, resizeMode: 'contain'}}
            />
            <View
              style={{
                backgroundColor: '#DD0B12',
                marginLeft: 90,
                borderRadius: 5,
              }}>
              <Text style={{padding: 7, color: 'white'}}>SUBSCRIBE</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <Image
                source={require('../images/search.png')}
                style={{height: 25, width: 25}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderColor: 'purple',
              borderWidth: 0.3,
              marginTop: 10,
            }}
          />
          <View style={{marginTop: 10, marginBottom: 10}}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={Category}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSelected(index);
                      getData2(Category[index].category);
                    }}
                    style={{
                      backgroundColor:
                        index == Selected ? '#DD0B12' : 'lavender',
                      padding: 7,
                      marginRight: 3,
                      borderRadius: 10,
                      marginLeft: 10,
                    }}>
                    <Text
                      style={{color: index == Selected ? 'white' : 'black'}}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <FlatList
            data={Data}
            renderItem={({item, index}) => {
              return <Card item={item} navigation={navigation} />;
            }}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
