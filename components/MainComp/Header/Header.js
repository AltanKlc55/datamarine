import 'react-native-gesture-handler';
import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./header.styles";
import { Entypo, Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Header = ({ title,navigation, previus }) => {
  const [menuHandler, setMenuHandler] = useState(false);
  const [allData, setAllData] = useState([]);
   console.log(title);
  const sideMenuHandler = () => {
    if (menuHandler === false) {
      setMenuHandler(true);
    } else {
      setMenuHandler(false);
    }
  }

  async function fetchData() {
    try {
      const response = await fetch('https://yesilyurtavm.com/application/yesilyurtapi/stores.php');
      const result = await response.json();
      setAllData(result);
    } catch (error) {
      console.error('Veri alınırken hata oluştu:', error);
    }
  }

  useEffect(() => {
    if (menuHandler === true) {
     
    } else {
      
    }

  }, [menuHandler])

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <>
      <SafeAreaView style={{ backgroundColor: "white" }}>
        <StatusBar backgroundColor="#041a72" style="dark" />

        <View style={styles.headerZone}>
          <View style={styles.menuBtnZone}>
            <TouchableOpacity onPress={title === "MenuScreen" ? navigation.goBack : () => navigation.navigate("MenuScreen")}>
              <Entypo name={title === "MenuScreen" ? "triangle-left" : "menu"} size={30} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <Image
              style={styles.image}
              source="https://datamarine.com/assets/img/data-white.png"
              contentFit="contain"
              tintColor={'white'}
            />
          </View>
          <View style={styles.profileBtnZone}>
           
          </View>
        </View>
        <View style={styles.headerZoneBottom}>
          <View style={styles.buttonOuttter}>
            <TouchableOpacity style={styles.butttonZoneH} onPress={() => navigation.navigate("Services")}>
              <Text style={styles.headerZoneBtmTxtt}><FontAwesome name="newspaper-o" size={14} color="white" /> Services</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonOuttter}>
            <TouchableOpacity style={styles.butttonZoneH} onPress={() => navigation.navigate("Everify")}>
              <Text style={styles.headerZoneBtmTxtt}><MaterialCommunityIcons name="contacts-outline" size={14} color="white" /> E-Verify</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    
    </>
  )
}

export default Header;