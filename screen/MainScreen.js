import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {MainImageLayout} from '../components/Layout';
import {ENCYCLOPEDIA} from '../data/crown_data';
import {COLORS} from '../constant/color';

const EncyclopediaCard = ({item, onPress}) => (
  <TouchableOpacity style={styles.card} onPress={() => onPress(item)}>
    <Image source={item.image} style={styles.cardImage} resizeMode="cont" />
    <Text style={styles.cardTitle}>{item.name}</Text>
  </TouchableOpacity>
);

const MainScreen = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = item => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <MainImageLayout>
      <FlatList
        data={ENCYCLOPEDIA}
        renderItem={({item}) => (
          <EncyclopediaCard item={item} onPress={openModal} />
        )}
        keyExtractor={item => item.name}
        // contentContainerStyle={styles.listContainer}
        contentContainerStyle={[styles.listContainer, {paddingBottom: 90}]}
        showsVerticalScrollIndicator={false}
      />

      <Modal
        visible={!!selectedItem}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}>
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.modalContainer}>
            <ScrollView
              contentContainerStyle={styles.modalContent}
              showsVerticalScrollIndicator={false}>
              {selectedItem && (
                <>
                  <Image
                    source={selectedItem.image}
                    style={styles.modalImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.modalTitle}>{selectedItem.name}</Text>
                  <Text style={styles.modalStory}>{selectedItem.story}</Text>
                </>
              )}
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </SafeAreaView>
      </Modal>
    </MainImageLayout>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  card: {
    backgroundColor: COLORS.black,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    width: '65%',
    height: 210,
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.white,
  },
  modalContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: COLORS.black,
    borderRadius: 20,
    padding: 20,
    // width: '90%',
    // maxHeight: '80%',
  },
  modalImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: COLORS.beige,
  },
  modalStory: {
    fontSize: 17,
    lineHeight: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: COLORS.white,
  },
  closeButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
