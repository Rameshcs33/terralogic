import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  FlatList,
  Keyboard,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Avatar, Searchbar} from 'react-native-paper';
import {moderateScale} from '../common/scale';

let {width} = Dimensions.get('window');

const Login = () => {
  const [Search, setSearch] = useState<string>('');
  const [SearchList, setSearchList] = useState<any>([]);
  const [TempList, setTempList] = useState<any>([]);
  const [Loader, setLoader] = useState<boolean>(false);

  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(false);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(TempList.length / itemsPerPage);

  const onSearch = async () => {
    Keyboard.dismiss();

    if (Search === '' || Search.length === 0 || Search === ' ') {
      Alert.alert('Enter search text');
      return;
    }
    setLoader(true);
    await fetch(`https://api.github.com/search/users?q=${Search}`)
      .then((res: any) => res.json())
      .then((response: any) => {
        setLoader(false);
        if (response != undefined && response !== null) {
          if (response.items != undefined && response.items.length > 0) {
            setHasMore(true);
            setPage(1);
            setTempList(response.items);
            setSearchList([]);
          } else {
            Alert.alert('No data found !');
            setTempList([]);
          }
        } else {
          Alert.alert('Something went wrong !!');
          setTempList([]);
        }
      })
      .catch((error: any) => {
        console.log(error);
        setLoader(false);
        setTempList([]);
      });
    setSearch('');
  };

  useEffect(() => {
    if (page >= 1) fetchData(page);
  }, [page]);

  const fetchData = (page: number) => {
    if (loading || !hasMore) return;

    setLoading(true);
    setTimeout(() => {
      const currentItems: any = TempList.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage,
      );

      if (currentItems.length !== 0) {
        setSearchList((previous: any) => [...previous, ...currentItems]);
      }
      setLoading(false);
    }, 1000);
  };

  const loadMoreData = () => {
    if (loading) return;
    if (page >= 1 && page <= totalPages) {
      if (!loading && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    } else {
      setHasMore(false);
    }
  };

  const renderItem = ({item, index}: any) => {
    return (
      <Pressable style={styles.card} testID="card">
        <View style={{width: moderateScale(40)}}>
          <Avatar.Image
            source={{uri: item.avatar_url}}
            size={moderateScale(40)}
          />
        </View>

        <View style={{width: '75%', paddingHorizontal: moderateScale(12)}}>
          <Text style={{fontSize: moderateScale(13), color: 'black'}}>
            {item.login}
          </Text>
        </View>

        <View style={{width: '10%'}}>
          <Text style={{fontSize: moderateScale(13), color: 'black'}}>
            {item.type}
          </Text>
        </View>
      </Pressable>
    );
  };

  const renderFooter = () => {
    return (
      loading && (
        <View
          style={{
            padding: moderateScale(10),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={'large'} color={'blue'} />
        </View>
      )
    );
  };

  return (
    <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
      <View
        testID="searchRow"
        style={{
          width: moderateScale(340),
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Searchbar
          style={{
            width: moderateScale(230),
            height: moderateScale(42),
          }}
          inputStyle={{color: 'black', fontSize: moderateScale(12)}}
          placeholderTextColor={'gray'}
          testID="search"
          placeholder="Search"
          value={Search}
          onChangeText={setSearch}
        />

        <Pressable
          testID="searchBtn"
          onPress={onSearch}
          style={{
            paddingHorizontal: moderateScale(30),
            paddingVertical: moderateScale(10),
            borderRadius: moderateScale(8),
            backgroundColor: 'blue',
          }}>
          <Text style={{fontSize: moderateScale(14), color: 'white'}}>
            Submit
          </Text>
        </Pressable>
      </View>

      {SearchList.length !== 0 && (
        <FlatList
          style={{paddingTop: moderateScale(5)}}
          keyboardShouldPersistTaps={'handled'}
          showsVerticalScrollIndicator={false}
          data={SearchList}
          keyExtractor={(item: any, key: number) => key.toString()}
          renderItem={renderItem}
          onEndReached={loadMoreData}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
        />
      )}

      {Loader === true && (
        <View
          style={{
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            zIndex: 5,
          }}>
          <ActivityIndicator size={'large'} color={'blue'} />
        </View>
      )}
    </Pressable>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: moderateScale(12),
  },
  card: {
    backgroundColor: 'white',
    width: moderateScale(340),
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(10),
    shadowColor: 'gray',
    shadowOffset: {height: moderateScale(1), width: 0},
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: moderateScale(5),
  },
});
