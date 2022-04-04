import { useState } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';

import { COLORS, InsData } from '../constants';
import { InsCard, HomeHeader, FocusedStatusBar } from '../components';

const Home = () => {
  const [data, setData] = useState(InsData);

  const handleSearch = (value) => {
    if (!value.length) return setData(InsData);

    const filteredData = InsData.filter((ins) =>
      ins.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) setData(filteredData);
    else setData(InsData);
  };

  const handleCart = () => console.log('Cart clicked');
  return (
    <SafeAreaView style={styles.screen}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={styles.container}>
        <View style={styles.list}>
          <FlatList
            data={data}
            renderItem={({ item }) => <InsCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <HomeHeader
                cart={20}
                handlePress={handleCart}
                onSearch={handleSearch}
              />
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
  container: { flex: 1 },
  list: { zIndex: 0 },
  subInfo: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1,
  },
  title: { height: 300, backgroundColor: COLORS.primary },
  subtitle: { flex: 1, backgroundColor: COLORS.white },
});

export default Home;
