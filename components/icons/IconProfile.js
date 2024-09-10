import {StyleSheet, Text, View, Image} from 'react-native';
import {COLORS} from '../../constant/color';

const IconProfile = ({focused}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../../assets/icons/king.png')}
          style={{width: 40, height: 40}}
        />
        <Image
          source={require('../../assets/icons/queen.png')}
          style={{width: 40, height: 40}}
        />
      </View>
      <View
        style={{
          backgroundColor: focused ? COLORS.gold : null,
          height: 10,
          width: 10,
          borderRadius: 10,
          marginTop: 5,
        }}></View>
    </View>
  );
};

export default IconProfile;

const styles = StyleSheet.create({});
