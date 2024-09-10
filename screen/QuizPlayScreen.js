import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {MainImageLayout} from '../components/Layout';
import {COLORS} from '../constant/color';
import {useCrownQuiz} from '../store/crown_store';
import {IconReturnSword} from '../components/icons';

const QuizPlayScreen = ({navigation}) => {
  const {crownQuiz} = useCrownQuiz();
  console.log(crownQuiz);

  const renderLevelCard = ({item}) => (
    <TouchableOpacity
      disabled={!item.isActive}
      style={[styles.card, !item.isActive && styles.disabledCard]}
      onPress={() =>
        navigation.navigate('QuizQuestionScreen', {levelId: item.id})
      }>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardSubtitle}>
        {item.isActive ? 'Active' : 'Locked'}
      </Text>
    </TouchableOpacity>
  );

  return (
    <MainImageLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Choose a Level</Text>
        <FlatList
          data={crownQuiz}
          renderItem={renderLevelCard}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
      <IconReturnSword />
    </MainImageLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.beige,
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: COLORS.black + '90',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
  },
  disabledCard: {
    opacity: 0.5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.beige,
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: COLORS.beige + '80',
  },
});

export default QuizPlayScreen;
