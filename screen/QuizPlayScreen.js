import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {MainImageLayout} from '../components/Layout';
import {COLORS} from '../constant/color';
import {useCrownQuiz} from '../store/crown_store';
import {IconReturnSword} from '../components/icons';
import {QUIZ_CARD_IMAGE} from '../data/crown_data';

const {width, height} = Dimensions.get('window');
const CARD_HEIGHT = height * 0.3;

const QuizPlayScreen = ({navigation}) => {
  const {crownQuiz} = useCrownQuiz();
  console.log(crownQuiz);

  const renderLevelCard = ({item}) => {
    const cardImageData = QUIZ_CARD_IMAGE.find(img => img.id === item.id);
    const cardImage = cardImageData ? cardImageData.cardImage : null;
    console.log(item);
    return (
      <TouchableOpacity
        disabled={!item.isActive}
        style={[styles.cardContainer, !item.isActive && styles.disabledCard]}
        onPress={() =>
          navigation.navigate('QuizQuestionScreen', {levelId: item.id})
        }>
        <ImageBackground
          source={cardImage}
          style={styles.card}
          imageStyle={styles.cardImage}>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardSubtitle}>
              {item.isActive ? 'Active' : 'Locked'}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <MainImageLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Choose a Level</Text>
        <FlatList
          data={crownQuiz}
          renderItem={renderLevelCard}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={{height: 50}}></View>
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
    opacity: 0.2,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.beige,
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: COLORS.beige + '80',
  },
  cardContainer: {
    height: CARD_HEIGHT,
    marginBottom: 15,
  },
  card: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  cardImage: {
    borderRadius: 10,
    height: '100%',
    width: '100%',
  },
  cardContent: {
    backgroundColor: COLORS.black + '90',
    borderRadius: 10,
    padding: 20,
  },
  disabledCard: {
    opacity: 0.5,
  },
});

export default QuizPlayScreen;
