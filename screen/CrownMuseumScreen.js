import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {MUSEUM} from '../data/crown_data';
import {MainImageLayout} from '../components/Layout';
import {COLORS} from '../constant/color';

const CrownCard = ({item, onPress}) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={item.image} style={styles.cardImage} />
    <Text style={styles.cardTitle}>{item.crown}</Text>
  </TouchableOpacity>
);

const CrownModal = ({item, visible, onClose}) => (
  <Modal visible={visible} transparent animationType="fade">
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Image source={item.image} style={styles.modalImage} />
        <Text style={styles.modalTitle}>{item.crown}</Text>
        <Text style={styles.modalAbout}>{item.about}</Text>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

const CrownMuseumScreen = () => {
  const [selectedCrown, setSelectedCrown] = useState(null);

  const openModal = item => {
    setSelectedCrown(item);
  };

  const closeModal = () => {
    setSelectedCrown(null);
  };

  return (
    <MainImageLayout>
      <View style={styles.container}>
        <FlatList
          data={MUSEUM}
          renderItem={({item}) => (
            <CrownCard item={item} onPress={() => openModal(item)} />
          )}
          keyExtractor={item => item.crown}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
        />
        {selectedCrown && (
          <CrownModal
            item={selectedCrown}
            visible={!!selectedCrown}
            onClose={closeModal}
          />
        )}
      </View>
    </MainImageLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#f0f0f0',
  },
  listContainer: {
    padding: 10,
  },
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: COLORS.beige,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  cardTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: COLORS.black,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: COLORS.white,
  },
  modalAbout: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: COLORS.white,
  },
  closeButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CrownMuseumScreen;
