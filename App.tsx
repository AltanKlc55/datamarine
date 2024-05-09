import 'react-native-gesture-handler';
import { NavigationContainer, NavigationState, getFocusedRouteNameFromRoute, useNavigationContainerRef, useRoute } from '@react-navigation/native';
import { SafeAreaView} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import { useRef, useState } from 'react';
import styles from './app.styles';
import Header from './components/MainComp/Header/Header';
import MenuScreen from './components/MenuScreen/MenuScreen';
import AboutUs from './screens/AboutUs';
import Contact from './screens/Contact';
import OurApprovals from './screens/OurApprovals';
import Blog from './screens/Blog';
import UsefulLinks from './screens/UsefulLinks';
import Bottom from './components/MainComp/Bottom/Bottom';
import Services from './screens/Services';
import BlogDetailScreen from './screens/BlogDetailScreen';
import ServicesDetailScreen from './screens/ServicesDetailScreen';
import Evreify from './screens/Everify';

type AppStackParamList = {
  MainScreen: undefined;
  HaberScreen: undefined;
  StandartListScreen: undefined;
  EczaneScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const x = [
  {
    name: "LoginScreen",
    component: MainScreen,
    headerStatus: false
  },
]

const routes = [
  {
    name: "MainScreen",
    component: MainScreen,
    headerStatus: true
  },
  {
    name: "MenuScreen",
    component: MenuScreen,
    headerStatus: true
  },
  {
    name: "AboutUs",
    component: AboutUs,
    headerStatus: true
  },
  {
    name: "Contact",
    component: Contact,
    headerStatus: true
  },
  {
    name: "OurApprovals",
    component: OurApprovals,
    headerStatus: true
  },
  {
    name: "Blog",
    component: Blog,
    headerStatus: true
  },
  {
    name: "Services",
    component: Services,
    headerStatus: true
  },
  {
    name: "UsefulLinks",
    component: UsefulLinks,
    headerStatus: true
  },
  {
    name: "BlogDetailScreen",
    component: BlogDetailScreen,
    headerStatus: true
  },
  {
    name: "ServicesDetailScreen",
    component: ServicesDetailScreen,
    headerStatus: true
  },
  {
    name: "Everify",
    component: Evreify,
    headerStatus: true
  },
  
    

];

const latest: Array<React.ComponentProps<typeof Stack.Navigator>> = [...routes, ...x]
const App = () => {

  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef();
  const [screenName,setScreenName] = useState();

  const BottomMenu = () =>{
    if(screenName === undefined){
      return null
    }else if(screenName === ""){
      return null
    }else{
      return <Bottom screenName={screenName} />
    }
  }



  return (
    <NavigationContainer 
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute().name;
        const trackScreenView = () => { };
        if (previousRouteName !== currentRouteName) {
          routeNameRef.current = currentRouteName;
          setScreenName(currentRouteName);
          await trackScreenView(currentRouteName);
        }
      }}
    >
      <Stack.Navigator
        initialRouteName='MainScreen'
        screenOptions={{
          header: ({ scene, previous, navigation }) => {
            return <Header title={routeNameRef.current} navigation={navigation} previus={previous}/>;
          },
        }} >

        {latest.map((routeConfig) => (
          <Stack.Screen key={routeConfig.name} {...routeConfig} options={{headerShown: routeConfig.headerStatus}}/>
        ))}

      </Stack.Navigator>

            
      <SafeAreaView style={styles.bottomTabZone}>
        <Bottom />
      </SafeAreaView>

    </NavigationContainer>
  )
}

export default App;
