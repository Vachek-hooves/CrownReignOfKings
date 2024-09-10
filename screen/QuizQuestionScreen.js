import {StyleSheet, Text, View} from 'react-native';
import {MainImageLayout} from '../components/Layout';
import {IconReturnSword} from '../components/icons';

const QuizQuestionScreen = ({route}) => {
  const levelId = route.params.levelId;

  return (
    <MainImageLayout>
      <IconReturnSword />
    </MainImageLayout>
  );
};

export default QuizQuestionScreen;

const styles = StyleSheet.create({});
