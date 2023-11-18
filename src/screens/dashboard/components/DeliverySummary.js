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

import DeliveryTypes from './DeliveryTypes';

function DeliverySummary() {
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
    <View style={styles.shadowContainer}>
      <View style={styles.container}>
        <Text style={styles.titleDelivery}>Resumos das Entregas</Text>
        <View style={styles.deliveryTypesContainer}>
          <DeliveryTypes tipo="Aceitas" quantidade="15" />
          <DeliveryTypes tipo="Rejeitadas" quantidade="5" />
          <DeliveryTypes tipo="Total" quantidade="20" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderRadius: 20,
    elevation: 5,
    margin: 30,
  },
  container: {
    height: 184,
    width: 324,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  titleDelivery: {
    fontFamily: 'PoppinsBold',
    fontSize: 16,
    marginBottom: 130,
    marginHorizontal: 13,
    color: '#333333',
  },
  deliveryTypesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginHorizontal: 14,
    marginTop: -115,
  }
});

export default DeliverySummary;
