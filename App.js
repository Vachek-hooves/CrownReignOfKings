import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {CrownProvider} from './store/crown_store';
import {Text} from 'react-native';
import {
  MainScreen,
  WelcomeScreen,
  GameScreen,
  CrownMuseumScreen,
} from './screen';
import ProfileScreen from './screen/ProfileScreen';
import {COLORS} from './constant/color';
import IconKingdom from './components/icons/IconKingdom';
import {IconProfile, IconQuiz} from './components/icons';
import IconTabCrown from './components/icons/IconTabCrown';

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: COLORS.beige,
          borderRadius: 15,
          height: 90,
          backgroundColor: 'transparent',
          backgroundColor: COLORS.black,
          marginTop: 20,
          paddingTop: 30,
          marginTop:10,
          ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.5,
            },
            android: {
              elevation: 5,
            },
          }),
        },
        tabBarActiveTintColor: COLORS.yellow,
        tabBarInactiveTintColor: COLORS.darkBeige,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        // tabBarItemStyle: {
        //   // paddingVertical: 5,
          
        // },
        title: '',
        // contentStyle: {
        //   paddingBottom: 220,
        // },
      }}>
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{tabBarIcon: ({focused}) => <IconKingdom focused={focused} />}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{tabBarIcon: ({focused}) => <IconProfile focused={focused} />}}
      />
      <Tab.Screen
        name="Game"
        component={GameScreen}
        options={{tabBarIcon: ({focused}) => <IconQuiz focused={focused} />}}
      />
      <Tab.Screen
        name="CrownMuseumScreen"
        component={CrownMuseumScreen}
        options={{
          tabBarIcon: ({focused}) => <IconTabCrown focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <CrownProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'fade_from_bottom',
            animationDuration: 1000,
          }}>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </CrownProvider>
  );
}

export default App;
