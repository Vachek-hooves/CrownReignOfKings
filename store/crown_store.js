import {useState, useEffect, useContext, createContext} from 'react';
import {fetchCrownQuiz, saveCrownQuiz} from './utils';
import {CROWN_DATA} from '../data/crown_data';

export const CrownContext = createContext({
  crownQuiz: [],
  resetQuiz: () => {},
  saveLevelScore: () => {},
});

export const CrownProvider = ({children}) => {
  const [crownQuiz, setCrownQuiz] = useState([]);
  useEffect(() => {
    initQuizData();
  }, []);

  const initQuizData = async () => {
    try {
      let data = await fetchCrownQuiz();
      if (data.length === 0) {
        await saveCrownQuiz(CROWN_DATA);
        data = await fetchCrownQuiz();
      }
      setCrownQuiz(data);
    } catch (error) {
      throw new Error('Crown Quiz initialize error', error);
    }
  };

  const resetQuiz = async () => {
    try {
      await saveCrownQuiz(CROWN_DATA);
      const data = await fetchCrownQuiz();
      setCrownQuiz(data);
    } catch (error) {
      throw new Error('Reset Crown Quiz error', error);
    }
  };
  const saveLevelScore = async (levelId, score) => {
    try {
      const updatedQuiz = crownQuiz.map(level =>
        level.id === levelId ? {...level, levelScore: score.toString()} : level,
      );
      await saveCrownQuiz(updatedQuiz);
      setCrownQuiz(updatedQuiz);
    } catch (error) {
      throw new Error('Save Level Score error', error);
    }
  };

  const value = {crownQuiz, resetQuiz, saveLevelScore};
  return (
    <CrownContext.Provider value={value}>{children}</CrownContext.Provider>
  );
};

export const useCrownQuiz = () => {
  const context = useContext(CrownContext);
  if (!context) {
    throw new Error('useCrownQuiz in provider');
  }
  return context;
};
