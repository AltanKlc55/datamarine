import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import styles from "./screens.styles";

const OurApprovals = () => {
  const [data, setData] = useState([]);


  const fetchData = async () => {
    try {
      const response = await fetch('http://api.datamarine.com/approvals');
      const result = await response.json();
      setData(result.slice(-20));
    } catch (error) {
      console.error('Veri alınırken hata oluştu:', error);
    }
  };

  console.log(data)

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <View style={styles.brandContainer}>
            <View style={styles.upperTitle}>
                 <Text style={styles.upperTitleText}>Approvals</Text>
            </View>
      <ScrollView contentContainerStyle={{paddingHorizontal:15,paddingTop:20,paddingBottom:70}}>
        {data.map((item, index) => (
          <TouchableOpacity key={index} style={styles.serviceCard}>
            <Image
              style={styles.approvlImage}
              source={"https://datamarine.com/yonetim/uploads/projects_v/"+item.img_url}
              contentFit="contain"
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

export default OurApprovals;