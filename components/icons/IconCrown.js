import { Image} from 'react-native';
import {COLORS} from '../../constant/color';

const IconCrown = () => {
  return (
    <Image
      source={require('../../assets/icons/crown1.png')}
      style={{
        height: 150,
        width: 150,
        tintColor: COLORS.white,
        transform: [{rotate: '-20deg'}],
        marginHorizontal: 20,
      }}
    />
  );
};

export default IconCrown;


