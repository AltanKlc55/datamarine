import { Image } from 'expo-image';
import React, { useState, useEffect, useRef } from 'react';
import {
  ScrollView,
  Dimensions,
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Text,
} from 'react-native';

const Carousel = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const data = props.data || [];
  const scrollView = useRef(null);

  const scrollToNext = () => {
    if (currentPage < data.length - 1) {
      scrollView.current.scrollTo({ x: (currentPage + 1) * Dimensions.get('window').width, animated: true });
    } else {
      scrollView.current.scrollTo({ x: 0, animated: true });
    }
  };

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      scrollToNext();
    }, 5000);

    return () => {
      clearInterval(carouselInterval);
    };
  }, [currentPage, data]);

  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    const newPage = Math.round(contentOffset.x / Dimensions.get('window').width);
    setCurrentPage(newPage);
  };



  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollView}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      >
        {data.map((item, index) => (
          <TouchableOpacity key={index} style={styles.slide}>
            <Image
              style={styles.image}
              source={"https://datamarine.com/yonetim/uploads/slides_v/"+item.img_url}
              contentFit="contain"
            />
            <Text style={{position:"absolute",alignSelf:"flex-start",color:"white",fontWeight:"600",fontSize:20,width:"50%",paddingLeft:20,backgroundColor:"#041a72"}}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {data.map((_, i) => (
          <View
            key={i}
            style={[
              styles.paginationDot,
              i === currentPage && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  slide: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: 240,
    backgroundColor:"#041a72",
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'gray',
    margin: 5,
  },
  activeDot: {
    backgroundColor: '#041a72',
  },
});

export default Carousel;