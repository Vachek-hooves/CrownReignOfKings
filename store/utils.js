import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveCrownQuiz = async quiz => {
  try {
    await AsyncStorage.setItem('crown', JSON.stringify(quiz));
  } catch (error) {
    throw new Error('Crown quiz saving error', error);
  }
};

export const fetchCrownQuiz = async () => {
  try {
    const data = await AsyncStorage.getItem('crown');
    return data !== null ? JSON.parse(data) : [];
  } catch (error) {
    throw new Error('Crown Quiz Data fetching error ', error);
  }
};
