import {Image, View} from 'react-native';
import {COLORS} from '../../constant/color';

const IconKingdom = ({focused}) => {
  return (
    <>
      <Image
        source={require('../../assets/icons/encyclopedia.png')}
        style={{width: 55, height: 55}}
      />
      <View
        style={{
          backgroundColor: focused ? COLORS.gold : null,
          height: 10,
          width: 10,
          borderRadius: 10,
        }}></View>
    </>
  );
};

export default IconKingdom;
