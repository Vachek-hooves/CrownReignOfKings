import {View, Image, TouchableOpacity, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('screen');
const MARGIN_BOTTOM = height * 0.05;
const RIGHT_MARGIN = width * 0.1;

const IconReturnSword = () => {
  const navigation = useNavigation();
  function goBack() {
    navigation.goBack();
  }
  return (
    <View
      style={{
        position: 'absolute',
        bottom: MARGIN_BOTTOM,
        right: RIGHT_MARGIN,
      }}>
      <TouchableOpacity onPress={goBack}>
        <Image
          source={require('../../assets/icons/swordReturn.png')}
          style={{width: 60, height: 60, transform: [{rotate: '-135deg'}]}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default IconReturnSword;
