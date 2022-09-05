import { useState, useContext, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { COLORS } from '../constants';
import {
  Card,
  HomeHeader,
  FocusedStatusBar,
  ListItemSeperator,
  Screen,
} from '../components';
import routes from '../navigation/routes';
import { PolicyContext } from '../context/policyContext';

const Home = ({ navigation }) => {
  const { products } = useContext(PolicyContext);
  const [data, setData] = useState(products);

  useEffect(() => {
    setData(products);
  }, [products]);

  const handleSearch = (value) => {
    if (!value.length) return setData(products);

    const filteredData = products.filter((ins) =>
      ins.title.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) setData(filteredData);
    else setData(products);
  };

  const handleCat = (cat) => {
    if (cat === 'All') return setData(products);

    const filteredData = products.filter(
      (ins) => ins.category.toLowerCase() === cat.toLowerCase()
    );

    if (filteredData.length) setData(filteredData);
    else setData(products);
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
