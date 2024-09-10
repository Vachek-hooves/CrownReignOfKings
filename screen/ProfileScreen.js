import {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MainImageLayout} from '../components/Layout';
import ImagePicker from '../components/ui/ImagePicker';

const USER_KEY = '@user_data';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem(USER_KEY);
      if (userData) {
        const {name, image} = JSON.parse(userData);
        setName(name);
        setImage(image);
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  const saveUserData = async () => {
    try {
      const userData = JSON.stringify({name, image});
      await AsyncStorage.setItem(USER_KEY, userData);
      setSaveMessage('Profile updated successfully!');
      setTimeout(() => setSaveMessage(''), 3000);
    } catch (error) {
      console.error('Error saving user data:', error);
      setSaveMessage('Failed to update profile. Please try again.');
    }
  };

  const handleImage = (images) => {
    if (images && images.length > 0) {
      setImage(images[0]);
    }
  };

  return (
    <MainImageLayout>
      <View style={{marginHorizontal: 30}}>
        <ImagePicker handleImage={handleImage} btnStyle={styles.imagePicker}>
          {image ? (
            <Image source={{uri: image}} style={styles.profileImage} />
          ) : (
            <View style={styles.placeholderImage}>
              <Text>Tap to add image</Text>
            </View>
          )}
        </ImagePicker>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Enter your name"
        />
        <TouchableOpacity style={styles.saveButton} onPress={saveUserData}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
        {saveMessage ? (
          <Text style={styles.saveMessage}>{saveMessage}</Text>
        ) : null}
        {name && (
          <Text style={styles.displayName}>Current name: {name}</Text>
        )}
      </View>
    </MainImageLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  placeholderImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#e1e1e1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  saveButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
  },
  saveMessage: {
    marginTop: 10,
    textAlign: 'center',
    color: 'green',
  },
  displayName: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imagePicker: {
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default ProfileScreen;
