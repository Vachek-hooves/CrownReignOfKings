import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {CROWN_DATA} from '../data/crown_data';
import {MainImageLayout} from '../components/Layout';
// update

const GameScreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const currentQuestion =
    CROWN_DATA[currentCategory].questionsArray[currentQuestionIndex];

  const handleOptionPress = option => {
    setSelectedOption(option);
    setIsCorrect(option === currentQuestion.correct);
  };

  const nextQuestion = () => {
    if (
      currentQuestionIndex <
      CROWN_DATA[currentCategory].questionsArray.length - 1
    ) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentCategory < CROWN_DATA.length - 1) {
      setCurrentCategory(currentCategory + 1);
      setCurrentQuestionIndex(0);
    } else {
      // Quiz finished
      alert('Quiz completed!');
    }
    setSelectedOption(null);
    setIsCorrect(null);
  };

  return (
    <MainImageLayout>
      <View>
        <Text style={styles.question}>{currentQuestion.question}</Text>
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
            <Text style={styles.nextButtonText}>Next Question</Text>
          </TouchableOpacity>
        )}
      </View>
    </MainImageLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  correctOption: {
    backgroundColor: 'green',
  },
  incorrectOption: {
    backgroundColor: 'red',
  },
  optionText: {
    fontSize: 16,
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

export default GameScreen;
