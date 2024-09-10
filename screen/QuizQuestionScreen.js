import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {MainImageLayout} from '../components/Layout';
import {IconReturnSword} from '../components/icons';
import {useCrownQuiz} from '../store/crown_store';
import {COLORS} from '../constant/color';

const QuizQuestionScreen = ({route,navigation}) => {
  const {crownQuiz, saveLevelScore} = useCrownQuiz();
  const levelId = route.params.levelId;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);

  const currentLevel = crownQuiz.find(level => level.id === levelId);
  const currentQuestion = currentLevel.questionsArray[currentQuestionIndex];
  const totalQuestions = currentLevel.questionsArray.length;

  const handleOptionPress = option => {
    setSelectedOption(option);
    const correct = option === currentQuestion.correct;
    setIsCorrect(correct);
    if (correct) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      // Quiz finished
      saveLevelScore(levelId, score, totalQuestions);
      const scorePercentage = (score / totalQuestions) * 100;
      const message = scorePercentage > 80 
        ? `Congratulations! You've unlocked the next level.`
        : `You need to score over 80% to unlock the next level.`;
      
      Alert.alert(
        "Quiz Completed",
        `Your score: ${score} out of ${totalQuestions}\n${message}`,
        [
          { text: "OK", onPress: () => navigation.goBack() }
        ]
      );
    }
  };

  const calculateProgress = () => {
    return ((currentQuestionIndex + 1) / totalQuestions) * 100;
  };

  return (
    <MainImageLayout>
      <ScrollView style={styles.container}>
        <View style={styles.progressInfoContainer}>
          <Text style={styles.progressInfoText}>
            Question: {currentQuestionIndex + 1} / {totalQuestions}
          </Text>
          <Text style={styles.progressInfoText}>Score: {score}</Text>
        </View>
        <View style={styles.progressBarContainer}>
          <View
            style={[styles.progressBar, {width: `${calculateProgress()}%`}]}
          />
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.question}>{currentQuestion.question}</Text>
        </View>
        {currentQuestion.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              selectedOption === option && isCorrect && styles.correctOption,
              selectedOption === option && !isCorrect && styles.incorrectOption,
            ]}
            onPress={() => handleOptionPress(option)}
            disabled={selectedOption !== null}>
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
        {selectedOption && (
          <TouchableOpacity style={styles.nextButton} onPress={nextQuestion}>
            <Text style={styles.nextButtonText}>
              {currentQuestionIndex < totalQuestions - 1
                ? 'Next Question'
                : 'Finish Quiz'}
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
      <IconReturnSword />
    </MainImageLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  progressInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  progressInfoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.beige,
  },
  progressBarContainer: {
    width: '100%',
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginBottom: 20,
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  questionContainer: {
    backgroundColor: COLORS.black,
    marginVertical: 5,
    borderRadius: 8,
    padding: 5,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: COLORS.white,
  },
  option: {
    backgroundColor: COLORS.beige,
    padding: 5,
    marginBottom: 10,
    borderRadius: 5,
    height: 70,
    justifyContent: 'center',
  },
  correctOption: {
    backgroundColor: 'green',
  },
  incorrectOption: {
    backgroundColor: 'red',
  },
  optionText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500',
  },
  nextButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default QuizQuestionScreen;
