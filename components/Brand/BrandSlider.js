import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import styles from "./styles.brand";
import { Image } from "expo-image";
import { useEffect, useState } from "react";

const BrandSlider = () => {
  const [data, setData] = useState([]);


  const fetchData = async () => {
    try {
      const response = await fetch('http://api.datamarine.com/referances');
      const result = await response.json();
      setData(result.slice(-20));
    } catch (error) {
      console.error('Veri alınırken hata oluştu:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <View style={styles.brandContainer}>
      <View style={styles.headerZone}>
        <Text style={styles.brandsHeader}> Brands </Text>
        <TouchableOpacity style={styles.allBtn}>
          <Text style={styles.allBtnTxt}>Online Store</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal contentContainerStyle={{ paddingRight: 25, paddingBottom: 15 }} nestedScrollEnabled>
        {data.map((item, index) => (
          <TouchableOpacity key={index} style={styles.brandItems}>
            <Image
              style={styles.image}
              source={"https://datamarine.com/yonetim/uploads/references_v/"+item.img_url}
              contentFit="contain"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default BrandSlider;