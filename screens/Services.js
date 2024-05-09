import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import styles from "./screens.styles";

const Services = ({navigation}) => {
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
            <View style={styles.upperTitle}>
                 <Text style={styles.upperTitleText}>Services</Text>
            </View>
      <ScrollView contentContainerStyle={{paddingHorizontal:15,paddingTop:20,paddingBottom:70}}>
        {data.map((item, index) => (
          <TouchableOpacity key={index} style={styles.serviceCard} onPress={()=> navigation.navigate('ServicesDetailScreen',{data:item})}>
            <Image
              style={styles.servicesCardImage}
              source={"https://datamarine.com/yonetim/uploads/hizmet_v/"+item.img_url}
              contentFit="cover"
            />
            <View style={{paddingTop:10,paddingHorizontal:5,paddingBottom:20}}>
            <Text style={{color:"#041a72",textAlign:"center",fontSize:14}}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default Services;