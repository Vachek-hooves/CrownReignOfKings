import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../constant/color';

const MainImageLayout = ({children}) => {
  return (
    <ImageBackground
      source={require('../../assets/img/bg/crown1.png')}
      style={{flex: 1}}>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: COLORS.blue + 90,
        }}></View>
      <SafeAreaView>{children}</SafeAreaView>
    </ImageBackground>
  );
};

export default MainImageLayout;

const styles = StyleSheet.create({});
