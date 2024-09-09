import {StyleSheet, Text, View} from 'react-native';
import {useCrownQuiz} from '../store/crown_store';
const WelcomeScreen = () => {
  const {crownQuiz} = useCrownQuiz();
  console.log(crownQuiz);
  return (
    <View>
      <Text>WelcomeScreen</Text>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
