import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import styles from "./services.styles";
import { Image } from "expo-image";
import { useEffect, useState } from "react";

const Services = () => {
  const [data, setData] = useState([]);


  const fetchData = async () => {
    try {
      const response = await fetch('http://api.datamarine.com/services');
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
        <Text style={styles.brandsHeader}> Services </Text>
     
      </View>
      <View style={{ paddingLeft: 10, paddingBottom: 15,flexDirection:"row",flexWrap:"wrap" }}>
        {data.map((item, index) => (
          <TouchableOpacity key={index} style={styles.brandItems}>
            <Image
              style={styles.image}
              source={"https://datamarine.com/yonetim/uploads/hizmet_v/"+item.img_url}
              contentFit="cover"
            />
            <View style={{paddingTop:10,paddingHorizontal:5}}>
            <Text style={{color:"#041a72",textAlign:"center",fontSize:13}}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default Services;