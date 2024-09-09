import {
  Animated,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS} from '../constant/color';
import {IconGoldenCrown} from '../components/icons';
import {useRef, useEffect} from 'react';

const WelcomeScreen = ({navigation}) => {
  const animation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => navigation.navigate('MainScreen'));
  }, [animation]);
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{backgroundColor: COLORS.blue, flex: 1}}
        source={require('../assets/img/bg/crown1.png')}
        blurRadius={2}>
        <View style={styles.overlay} />
        <View
          style={{
            transform: [{rotate: '10deg'}],
            alignItems: 'center',
            margin: 50,
          }}>
          <Text style={styles.text}>Crown </Text>
          <Text style={styles.text}>Reign of</Text>
          <Text style={styles.text}>Kings</Text>
        </View>

        <Image
          style={styles.louImage}
          source={require('../assets/img/encyclopedia/louis.png')}
        />
        <ImageBackground
          style={{
            position: 'relative',
            height: 200,
            width: 200,
            marginLeft: 30,
          }}
          source={require('../assets/img/encyclopedia/fredy.png')}>
          <View style={{position: 'absolute', top: -110}}>
            <IconGoldenCrown />
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  text: {color: COLORS.gold, fontWeight: '800', fontSize: 56, letterSpacing: 2},
  louImage: {transform: [{rotate: '20deg'}], marginLeft: '50%'},
  fredyImage: {marginHorizontal: 100},
  overlay: {
    ...StyleSheet.absoluteFillObject, // Накриває весь батьківський елемент
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Чорний колір з прозорістю 50%
  },
});
