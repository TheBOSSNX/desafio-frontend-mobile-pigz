import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { Roboto_700Bold } from '@expo-google-fonts/roboto';
import { FontAwesome5 } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';

function GainDay() {
  const [loaded] = useFonts({
    PoppinsBold: Poppins_700Bold,
    PoppinsSemiBold: Poppins_600SemiBold,
    PoppinsMedium: Poppins_500Medium,
    PoppinsRegular: Poppins_400Regular,
    RobotoBold: Roboto_700Bold,
  });

  const [isVisible, setIsVisible] = useState(true);

  if (!loaded) {
    return null;
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FF881F', '#FA641E']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientRetangle}>
        <View style={styles.topText}>
          <Text style={styles.infoText}>Ganhos do Dia</Text>
          <Text style={styles.infoText2}>29/07</Text>
        </View>
        <View style={styles.botText}>
          {isVisible ? (
            <Text style={styles.moneyVisible}>R$ 150</Text>
          ) : (
            <Text style={styles.moneyNotVisible}>----</Text>
          )}
          <TouchableOpacity onPress={toggleVisibility}>
            <FontAwesome5
              name={isVisible ? 'eye' : 'eye-slash'}
              size={25}
              color="#FA641E"
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 44,
  },
  gradientRetangle: {
    height: 107,
    width: 324,
    borderRadius: 20,
  },
  infoText: {
    color: '#FFFFFF',
    fontFamily: 'PoppinsMedium',
    fontSize: 16,
    marginLeft: 16,
    marginTop: 16,
  },
  infoText2: {
    color: '#FFFFFF',
    fontFamily: 'PoppinsMedium',
    fontSize: 16,
    marginLeft: 125,
    marginTop: 16,
    marginRight: 15,
  },
  moneyVisible: {
    color: '#FFFFFF',
    fontFamily: 'RobotoBold',
    fontSize: 30,
    marginLeft: 10,
  },
  moneyNotVisible: {
    color: '#FFFFFF',
    fontFamily: 'RobotoBold',
    fontSize: 30,
    marginLeft: 40,
  },
  eyeIcon: {
    color: '#FFFFFF',
    fontFamily: 'PoppinsMedium',
    marginRight: 10,
    marginTop: 10,
  },
  topText: {
    flexDirection: 'row',
  },
  botText: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginHorizontal: 12,
  },
});

export default GainDay;
