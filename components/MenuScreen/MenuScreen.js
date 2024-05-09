import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import styles from "./menuscreen.styles";
import { FontAwesome } from '@expo/vector-icons';

const MenuScreen = ({navigation}) => {
  return(
   <View style={styles.menuOutter}>
       <View style={styles.upperTitle}>
                 <Text style={styles.upperTitleText}>Menu</Text>
            </View>
     <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuBtn} onPress={() => navigation.navigate("MainScreen")}>
        <FontAwesome name="angle-double-right" size={19} color="white" />
           <Text style={styles.menuBtnTxt}>
              Home
           </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuBtn} onPress={() => navigation.navigate("AboutUs")}>
        <FontAwesome name="angle-double-right" size={19} color="white" />
           <Text style={styles.menuBtnTxt}>
              About Us
           </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuBtn} onPress={() => navigation.navigate("Everify")}>
        <FontAwesome name="angle-double-right" size={19} color="white" />
           <Text style={styles.menuBtnTxt}>
              E-Verify
           </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuBtn} onPress={() => navigation.navigate("Services")}>
        <FontAwesome name="angle-double-right" size={19} color="white" />
           <Text style={styles.menuBtnTxt}>
              Services
           </Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.menuBtn} onPress={() => navigation.navigate("UsefulLinks")}>
        <FontAwesome name="angle-double-right" size={19} color="white" />
           <Text style={styles.menuBtnTxt}>
              Useful Links
           </Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.menuBtn} onPress={() => navigation.navigate("OurApprovals")}>
        <FontAwesome name="angle-double-right" size={19} color="white" />
           <Text style={styles.menuBtnTxt}>
              Our Approvals
           </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuBtn} onPress={() => navigation.navigate("Blog")}>
        <FontAwesome name="angle-double-right" size={19} color="white" />
           <Text style={styles.menuBtnTxt}>
              Blog
           </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuBtn} onPress={() => navigation.navigate("Contact")}>
        <FontAwesome name="angle-double-right" size={19} color="white" />
           <Text style={styles.menuBtnTxt}>
              Contact
           </Text>
        </TouchableOpacity>
     </View>
     </View>
  )
}



export default MenuScreen;