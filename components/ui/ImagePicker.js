import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const ImagePicker = ({ handleImage, children, btnStyle }) => {
  const handleResponse = response => {
    if (response.didCancel) {
      Alert.alert('Operation canceled');
    } else if (response.errorCode) {
      Alert.alert('Error', response.errorMessage);
    } else if (response.assets && response.assets.length > 0) {
      const image = response.assets[0].uri;
      const images = response.assets.map(asset => asset.uri);
      handleImage(images);
    } else {
      Alert.alert('No image selected');
    }
  };

  const phoneLibrary = () => {
    const options = {storageOptions: {path: 'images'}, selectionLimit: 0};
    launchImageLibrary(options, handleResponse);
  };

  return (
    <TouchableOpacity style={[styles.container, btnStyle]} onPress={phoneLibrary}>
      {children || (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>Tap to add image</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 75,
    overflow: 'hidden',
    backgroundColor: '#e1e1e1',
  },
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    textAlign: 'center',
    color: '#888',
  },
});

export default ImagePicker;
