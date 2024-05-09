import { Text, View,TouchableOpacity } from "react-native";
import styles from "./bottom.styles";
import { FontAwesome } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { useNavigation} from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const Bottom = ({screenName}) => {

   const navigation = useNavigation();
   console.log(screenName);

  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.bottomButtons} onPress={() => navigation.navigate("MainScreen")} >
          <Feather style={[styles.btnIcon,{color:"#939194"}]}  name="home" size={20} />
          <Text style={[styles.bottomBtnText,{color:"#939194"}]}>
             Home
          </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomButtons}  onPress={() => navigation.navigate("Services")}>
      <MaterialCommunityIcons style={[styles.btnIcon,{color:"#939194"}]} name="toolbox-outline" size={24} color="black" />
          <Text style={[styles.bottomBtnText,{color:"#939194"}]}>
             Services
          </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomButtons}  onPress={() => navigation.navigate("Blog")}>
      <FontAwesome style={[styles.btnIcon,{color:"#939194"}]}  name="newspaper-o" size={20} color="black" />
          <Text style={[styles.bottomBtnText,{color:"#939194"}]}>
             Blog
          </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomButtons} onPress={() => navigation.navigate("Everify")}>
          <Octicons style={[styles.btnIcon,{color:"#939194"}]} name="verified" size={22} color="black" />
          <Text style={[styles.bottomBtnText,{color:"#939194"}]}>
             E-Verify
          </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Bottom;