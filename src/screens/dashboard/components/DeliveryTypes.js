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

function DeliverySummary(props) {

  const { tipo, quantidade } = props

  const [loaded] = useFonts({
    PoppinsBold: Poppins_700Bold,
    PoppinsSemiBold: Poppins_600SemiBold,
    PoppinsMedium: Poppins_500Medium,
    PoppinsRegular: Poppins_400Regular,
    RobotoBold: Roboto_700Bold,
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleDelivery}>{tipo}</Text>
      <Text style={styles.typeDelivery}>{quantidade}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: 97,
    height: 97,
    alignItems: 'center',
    borderColor: '#F0F0F0',
    borderRadius: 20,
    marginTop: -3,
    marginBottom: 9,
  },
  titleDelivery: {
    fontFamily: 'PoppinsRegular',
    color: '#9F9F9F',
    fontSize: 11,
    marginTop: 9,
  },
  typeDelivery: {
    fontFamily: 'PoppinsMedium',
    color: '#333333',
    fontSize: 40,
    marginTop: 2,
  },
});

export default DeliverySummary;
