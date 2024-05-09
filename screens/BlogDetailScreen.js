import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native"
import styles from "./screens.styles";
import { Image } from "expo-image";

const BlogDetailScreen = ({navigation,route}) =>{
    const [data,setData] = useState([]);

     useEffect(() => {setData(route.params.data)},[]);

     function removeHtmlTags(text) {
        if (!text) return '';
        return text.replace(/\<[^>]*>/g, '');
     }

    return(
      <View>


      <View style={styles.upperTitle}>
           <Text style={styles.upperTitleText}>{data?.title}</Text>
      </View>

      <ScrollView contentContainerStyle={{paddingBottom:70}}>
      <View style={styles.aboutImageZone}>
      <Image
        style={styles.aboutImage}
        source={"https://datamarine.com/yonetim/uploads/blog_v/"+data?.img_url}
        contentFit="cover"
      />
      </View>
      <View style={styles.aboutContent}>

     <Text>{removeHtmlTags(data?.content)}</Text>
     </View>
     </ScrollView>

  </View>
    )
}

export default BlogDetailScreen;