import {StyleSheet, Text, View} from 'react-native';
import {MainImageLayout} from '../components/Layout';
import {IconReturnSword} from '../components/icons';
import {useCrownQuiz} from '../store/crown_store';

const QuizPlayScreen = () => {
  const {crownQuiz} = useCrownQuiz();
  return (
    <MainImageLayout>
      <IconReturnSword />
    </MainImageLayout>
  );
};

export default QuizPlayScreen;

const styles = StyleSheet.create({});
