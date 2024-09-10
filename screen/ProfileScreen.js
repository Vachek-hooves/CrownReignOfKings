import React, {useState, useEffect} from 'react';
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
import {COLORS} from '../constant/color';

const USER_KEY = '@user_data';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
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
      } else {
        setIsEditing(true); // If no user data, go straight to editing mode
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
      setIsEditing(false);
      setTimeout(() => setSaveMessage(''), 3000);
    } catch (error) {
      console.error('Error saving user data:', error);
      setSaveMessage('Failed to update profile. Please try again.');
    }
  };

  const handleImage = images => {
    if (images && images.length > 0) {
      setImage(images[0]);
    }
  };

  return (
    <MainImageLayout>
      <View style={styles.container}>
        <ImagePicker handleImage={handleImage} btnStyle={styles.imagePicker}>
          {image ? (
            <Image source={{uri: image}} style={styles.profileImage} />
          ) : (
            <View style={styles.placeholderImage}>
              <Text>Tap to add image</Text>
            </View>
          )}
        </ImagePicker>

        {isEditing ? (
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="Enter your name"
          />
        ) : (
          <Text style={styles.nameText}>{name}</Text>
        )}

        {isEditing ? (
          <TouchableOpacity style={styles.saveButton} onPress={saveUserData}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => setIsEditing(true)}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        )}

        {saveMessage ? (
          <Text style={styles.saveMessage}>{saveMessage}</Text>
        ) : null}
      </View>
    </MainImageLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 75,
  },
  placeholderImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#e1e1e1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePicker: {
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: COLORS.black,
    borderWidth: 2,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 20,
    color: COLORS.white,
    fontWeight: '700',
  },
  nameText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: COLORS.beige,
    paddingHorizontal: 30,
    borderRadius: 5,
    paddingVertical: 10,
  },
  editButton: {
    backgroundColor: COLORS.gold,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 2,
  },
  saveMessage: {
    marginTop: 10,
    textAlign: 'center',
    color: 'green',
  },
});

export default ProfileScreen;
