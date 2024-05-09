import { useEffect, useState } from "react";
import { StyleSheet, Text, View,ScrollView } from "react-native"
import DealSlider from "../components/MainComp/DealSlider.js/DealSlider";
import BrandSlider from "../components/Brand/BrandSlider";
import Services from "../components/Services/Services";

const MainScreen = () => {
const [slider,setSlider] = useState([]);
const [brandsData,setBrandsData]= useState([]);

    async function fetchData() {
        try {
          const response = await fetch('http://api.datamarine.com/slides');
          const result = await response.json();
          setSlider(result);
        } catch (error) {
          console.error('Veri alınırken hata oluştu:', error);
        }
      }

      async function fetchBrand() {
        try {
          const response = await fetch('http://api.datamarine.com/slides');
          const result = await response.json();
          setSlider(result);
        } catch (error) {
          console.error('Veri alınırken hata oluştu:', error);
        }
      }

      useEffect(() => {
        fetchData();
        fetchBrand();
      },[])


    return(
        <ScrollView style={{flex:1}}>
        <View style={styles.mainScreen}>
          <View style={styles.container}>
            <DealSlider data={slider}/>
            <BrandSlider data={brandsData} />
            <Services />
          </View>
      </View>
      </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
      flex:1
    },
    page: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    mainScreen:{
        flex:1
    }
  });

export default MainScreen;