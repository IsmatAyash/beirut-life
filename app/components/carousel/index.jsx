import { View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.8;

const Carousel = ({images}) => {
  if (images && images.length) {
    return (
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={true}
        >
          {images.map((image) => (
            <Image style={styles.image} source={image.source} />
          ))}
        </ScrollView>
      </View>
    );
  }
  console.log('Please provide images');
  return null;
};

const styles = StyleSheet.create({
  scrollContainer: {
    height,
  },
  image: {
    width,
    height,
  },
});

export default Carousel;
