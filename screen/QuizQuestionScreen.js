import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { MainImageLayout } from '../components/Layout';
import { IconReturnSword } from '../components/icons';
import { useCrownQuiz } from '../store/crown_store';
import { COLORS } from '../constant/color';

const QuizQuestionScreen = ({ route }) => {
  const { crownQuiz } = useCrownQuiz();
  const levelId = route.params.levelId;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const currentLevel = crownQuiz.find(level => level.id === levelId);
  const currentQuestion = currentLevel.questionsArray[currentQuestionIndex];
  const totalQuestions = currentLevel.questionsArray.length;

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    setIsCorrect(option === currentQuestion.correct);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      // Quiz finished
      alert('Level completed!');
      // Here you can add navigation back to the level selection screen
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
            Remaining: {totalQuestions - currentQuestionIndex - 1}
          </Text>
          <Text style={styles.progressInfoText}>Total: {totalQuestions}</Text>
        </View>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${calculateProgress()}%` }]} />
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
              {currentQuestionIndex < totalQuestions - 1 ? 'Next Question' : 'Finish Quiz'}
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