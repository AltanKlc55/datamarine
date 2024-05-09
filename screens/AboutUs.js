import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native"
import styles from "./screens.styles";
import { Image } from "expo-image";

const AboutUs = () =>{
    const [data,setData] = useState([]);

    async function fetchData() {
        try {
          const response = await fetch('http://api.datamarine.com/inspection-audit');
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error('Veri alınırken hata oluştu:', error);
        }
      }

     useEffect(() => {fetchData()},[]);

     function removeHtmlTags(text) {
        if (!text) return '';
        return text.replace(/\<[^>]*>/g, '');
     }

    return(
      <View>
      <View style={styles.upperTitle}>
           <Text style={styles.upperTitleText}>{data[0]?.title}</Text>
      </View>
      <ScrollView contentContainerStyle={{paddingBottom:70}}>
      <View style={styles.aboutImageZone}>
      <Image
        style={styles.aboutImage}
        source={"https://datamarine.com/yonetim/uploads/kurumsal_v/"+data[0]?.img_url}
        contentFit="cover"
      />
      </View>
      <View style={styles.aboutContent}>

     <Text>{removeHtmlTags(data[0]?.content)}</Text>
     </View>
     </ScrollView>

  </View>
    )
}

export default AboutUs;