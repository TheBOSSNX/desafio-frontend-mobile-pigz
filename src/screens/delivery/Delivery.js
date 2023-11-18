import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import { Roboto_700Bold } from '@expo-google-fonts/roboto';

import InfoDelivery from './components/InfoDelivery';
import MenuBar from '../../components/MenuBar';
import DiningDelivery from './components/DiningDelivery';
import BallsLine from './components/BallsLine';

import { LinearGradient } from 'expo-linear-gradient';

function Delivery({ navigation }) {
  const [loaded] = useFonts({
    PoppinsBold: Poppins_700Bold,
    PoppinsSemiBold: Poppins_600SemiBold,
    PoppinsRegular: Poppins_400Regular,
    PoppinsMedium: Poppins_500Medium,
    RobotoBold: Roboto_700Bold,
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <MenuBar titleDelivery="Nova Entrega" onPress={() => navigation.navigate('Dashboard')} />
      <View style={styles.infoContainer}>
        <InfoDelivery
          titleInfo="Tempo Estimado"
          textInfo="30 Min"
          fontSize={20}
        />
        <InfoDelivery titleInfo="Número de ID" textInfo="#6789" fontSize={20} />
      </View>
      <View style={styles.divider} />
      <View style={styles.deliveryValue}>
        <InfoDelivery
          titleInfo="Valor da Entrega"
          textInfo="R$ 13,75"
          fontSize={35}
        />
      </View>

      <DiningDelivery />
      <View style={styles.containerLineBalls}>
        <View style={styles.verticalLine} />
        <View style={styles.containerBalls}>
          <BallsLine
            textBall="Coleta"
            textSmallBall1="Restaurante Recanto da Peixada"
            textSmallBall2="Distancia: 2km"
            fontFamily="PoppinsMedium"
          />
          <BallsLine
            textBall="Entrega"
            textSmallBall1="Av: Cabo dos Soldados - Caranã"
            textSmallBall2="Distancia: 6km"
            fontFamily="RobotoMedium"
          />
        </View>
      </View>
      <TouchableOpacity>
        <LinearGradient
          colors={['#FF881F', '#FA641E']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientButton}>
          <View style={styles.acepptIcon}>
            <Image
              source={require('../../../assets/images/close_black_24dp/aceppt.png')}
            />
          </View>
          <Text style={styles.buttonText}>Aceitar</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <View style={styles.closeIcon}>
            <Image
              source={require('../../../assets/images/close_black_24dp/close_black_24dp.png')}
            />
          </View>
          <Text style={styles.buttonText1}>Rejeitar</Text>
      </TouchableOpacity>
    </View>
  );
}

Delivery.navigationOptions = {
  title: 'Dashboard',
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -10,
  },
  deliveryValue: {
    marginTop: -20,
    marginBottom: -25,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(186, 186, 186, 1)',
    width: 350,
    alignSelf: 'center',
    borderRadius: 20,
    opacity: 1,
  },
  verticalLine: {
    borderRightWidth: 1,
    borderRightColor: 'rgba(186, 186, 186, 1)',
    height: 175,
    marginRight: 260,
  },
  containerBalls: {
    marginTop: -158,
    marginLeft: -14,
  },
  gradientButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    height: 45,
    width: 300,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'PoppinsMedium'
  },
  acepptIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  containerLineBalls: {
    paddingBottom: 50,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    height: 45,
    width: 300,
    borderWidth: 1,
    borderColor: '#E8453E',
    marginTop: 15,
    marginBottom: 40,
  },
  buttonText1: {
    color: '#E8453E',
    fontSize: 16,
    fontFamily: 'PoppinsMedium'
  },
  closeIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
  }
});

export default Delivery;
