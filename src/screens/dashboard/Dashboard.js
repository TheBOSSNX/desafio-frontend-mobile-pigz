import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import { Roboto_700Bold } from '@expo-google-fonts/roboto';
import { useNavigation } from '@react-navigation/native';

import GainDay from './components/GainDay';
import DeliverySummary from './components/DeliverySummary';
import NewDelivery from './components/NewDelivery';
import TabBar from './components/TabBar';

export function Dashboard() {
  const navigation = useNavigation();
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
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image
            style={styles.arrowStyle}
            source={require('../../../assets/images/arrow_back_black_24dp/arrow_back_black_24dp.png')}
          />
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={styles.textDashboard}>Visão Geral</Text>
        </View>
      </View>

      <GainDay />
      <DeliverySummary />
      <NewDelivery />
      <TabBar />
    </View>
  );
}

Dashboard.navigationOptions = {
  title: 'Login',
};

const styles = StyleSheet.create({
  textDashboard: {
    fontFamily: 'PoppinsMedium',
    fontSize: 18,
    textAlign: 'center',
    marginRight: 40,
  },
  container: {
    alignItems: 'center',
  },
  menu: {
    marginTop: 50,
    flexDirection: 'row',
    marginLeft: 16,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  arrowStyle: {
    width: 24,
    height: 24,
  },
});

export default Dashboard;
