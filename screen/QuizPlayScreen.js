import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ImageBackground,
  Dimensions,
  Modal,
  Image,
} from 'react-native';
import {MainImageLayout} from '../components/Layout';
import {COLORS} from '../constant/color';
import {useCrownQuiz} from '../store/crown_store';
import {IconReturnSword} from '../components/icons';
import {QUIZ_CARD_IMAGE} from '../data/crown_data';

const {width, height} = Dimensions.get('window');
const CARD_HEIGHT = height * 0.3;

const QuizPlayScreen = ({navigation}) => {
  const [selectedLevel, setSelectedLevel] = useState(null);
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
        // onPress={() =>
        //   navigation.navigate('QuizQuestionScreen', {levelId: item.id})
        // }
        onPress={() => setSelectedLevel(item)}>
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

  const closeModal = () => {
    setSelectedLevel(null);
  };
  const startQuizCall = () => {
    navigation.navigate('QuizQuestionScreen', {
      levelId: selectedLevel.id,
    });
    setSelectedLevel(null);
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
      <View style={{height: 60}}></View>
      <IconReturnSword />
      <Modal
        visible={selectedLevel !== null}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedLevel && (
              <>
                <Image
                  source={
                    QUIZ_CARD_IMAGE.find(img => img.id === selectedLevel.id)
                      ?.image
                  }
                  style={styles.modalImage}
                />
                <Text style={styles.modalTitle}>{selectedLevel.name}</Text>
                <Text style={styles.modalAboutText}>{selectedLevel.about}</Text>
                <Text style={styles.modalDescription}>
                  {selectedLevel.description}
                </Text>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={
                    //   () =>
                    //   navigation.navigate('QuizQuestionScreen', {
                    //     levelId: selectedLevel.id,
                    //   }
                    // )
                    startQuizCall
                  }>
                  <Text style={styles.modalButtonText}>Start Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={closeModal}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: COLORS.black,
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.beige,
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    color: COLORS.beige,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: COLORS.beige,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  modalButtonText: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 10,
  },
  closeButtonText: {
    color: COLORS.beige,
    fontSize: 16,
  },
  modalAboutText: {
    color: COLORS.beige,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default QuizPlayScreen;
