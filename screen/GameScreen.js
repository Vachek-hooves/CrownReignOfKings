import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
// import {CROWN_DATA} from '../data/crown_data';
import {MainImageLayout} from '../components/Layout';
import {COLORS} from '../constant/color';
import {useCrownQuiz} from '../store/crown_store';

const GameScreen = ({navigation}) => {
  function navigateQuizPlay() {
    navigation.navigate('QuizPlayScreen');
  }
  return (
    <MainImageLayout>
      <TouchableOpacity onPress={navigateQuizPlay}>
        <Text>Open Quiz</Text>
      </TouchableOpacity>
    </MainImageLayout>
  );
};

const styles = StyleSheet.create({});

export default GameScreen;
