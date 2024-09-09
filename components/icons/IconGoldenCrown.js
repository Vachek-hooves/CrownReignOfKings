import {StyleSheet, Text, View, Image} from 'react-native';
import {COLORS} from '../../constant/color';
import {runCLI} from 'jest';

const IconGoldenCrown = () => {
  return (
    <Image
      source={require('../../assets/img/crown/goldenCrown.png')}
      style={{
        height: 150,
        width: 150,
        transform: [{rotate: '10deg'}],
        marginHorizontal: 20,
        // zIndex: 2,
      }}
    />
  );
};

export default IconGoldenCrown;

const styles = StyleSheet.create({});
