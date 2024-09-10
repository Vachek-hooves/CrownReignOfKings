import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {MainImageLayout} from '../components/Layout';
import {COLORS} from '../constant/color';
import {useCrownQuiz} from '../store/crown_store';

const GameScreen = ({navigation}) => {
  function navigateQuizPlay() {
    navigation.navigate('QuizPlayScreen');
  }

  return (
    <MainImageLayout>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={require('../assets/img/crown/3dCrown.png')}
            style={styles.crownImage}
            resizeMode="contain"
          />
          <Text style={styles.title}>Crown Quiz</Text>
          <Text style={styles.subtitle}>Test your royal knowledge!</Text>
          <TouchableOpacity
            style={styles.playButton}
            onPress={navigateQuizPlay}>
            <Text style={styles.playButtonText}>PLAY</Text>
          </TouchableOpacity>
        </View>
      </View>
    </MainImageLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: COLORS.black + 90,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    elevation: 5,
  },
  crownImage: {
    width: 350,
    height: 350,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.beige,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: COLORS.beige,
    marginBottom: 20,
    textAlign: 'center',
  },
  playButton: {
    backgroundColor: COLORS.beige,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  playButtonText: {
    color: COLORS.black,
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 3,
  },
});

export default GameScreen;
