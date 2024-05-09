import { Text, TouchableOpacity, View, ScrollView, Linking } from "react-native";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import styles from "./screens.styles";

const UsefulLinks = () =>{
    const [data, setData] = useState([]);


    const fetchData = async () => {
      try {
        const response = await fetch('http://api.datamarine.com/useful-links');
        const result = await response.json();
        setData(result.slice(-20));
      } catch (error) {
        console.error('Veri alınırken hata oluştu:', error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, [])

    console.log(data)
  
    return (
      <View style={styles.brandContainer}>
              <View style={styles.upperTitle}>
                   <Text style={styles.upperTitleText}>Useful Links</Text>
              </View>
        <ScrollView contentContainerStyle={{paddingHorizontal:15,paddingTop:20,paddingBottom:70}}>
          {data.map((item, index) => (
            <TouchableOpacity key={index} style={styles.links} onPress={() => Linking.openURL(item.url)}>           
              <View style={{paddingTop:10,paddingHorizontal:5,paddingBottom:10}}>
              <Text style={{color:"#041a72",textAlign:"center",fontSize:13}}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    )
}

export default UsefulLinks;