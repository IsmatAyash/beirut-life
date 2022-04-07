import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { COLORS, InsData } from '../constants';
import {
  InsCard,
  Card,
  HomeHeader,
  FocusedStatusBar,
  ListItemSeperator,
  Screen,
} from '../components';
import routes from '../navigation/routes';

const Home = ({ navigation }) => {
  const [data, setData] = useState(InsData);

  const handleSearch = (value) => {
    if (!value.length) return setData(InsData);

    const filteredData = InsData.filter((ins) =>
      ins.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) setData(filteredData);
    else setData(InsData);
  };

  const handleCat = (cat) => {
    if (cat === 'All') return setData(InsData);

    const filteredData = InsData.filter(
      (ins) => ins.category.toLowerCase() === cat.toLowerCase()
    );

    if (filteredData.length) setData(filteredData);
    else setData(InsData);
  };

  const handleCart = () => console.log('Add policy to cart');
  return (
    <Screen>
      <FocusedStatusBar background={COLORS.primary} />

      <View>
        <View style={styles.list}>
          {data && (
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <Card
                  data={item}
                  onPress={() => navigation.navigate(routes.INS_DETAILS, item)}
                />
              )}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={
                <HomeHeader
                  cart={2}
                  handlePress={handleCart}
                  onSearch={handleSearch}
                  onFilter={handleCat}
                />
              }
              ItemSeparatorComponent={ListItemSeperator}
            />
          )}
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
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
