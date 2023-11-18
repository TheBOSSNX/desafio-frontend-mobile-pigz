import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import { Roboto_700Bold, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto';

import { LinearGradient } from 'expo-linear-gradient';


function DiningDelivery() {
  const [loaded] = useFonts({
    PoppinsBold: Poppins_700Bold,
    PoppinsSemiBold: Poppins_600SemiBold,
    PoppinsRegular: Poppins_400Regular,
    PoppinsMedium: Poppins_500Medium,
    RobotoBold: Roboto_700Bold,
    RobotoMedium: Roboto_500Medium,
    RobotoRegular: Roboto_400Regular,
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FF881F', '#FA641E']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientRetangle}>
        <View style={styles.diningImage}>
          <Image source={require('../../../../assets/images/delivery_dining_black_24dp/delivery_dining_black_24dp.png')}/>
        </View>
        <View style={styles.topText}>
          <Text style={styles.infoTitle}>Entrega</Text>
          <Text style={styles.infoText}>Percurso Total: 8km</Text>
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
    height: 60,
    width: 324,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoTitle: {
    color: '#FFFFFF',
    fontFamily: 'RobotoMedium',
    fontSize: 18,

  },
  infoText: {
    color: '#FFFFFF',
    fontFamily: 'RobotoRegular',
    fontSize: 14,
  },
  topText: {
    flexDirection: 'column',
    marginLeft: 16,
  },
  diningImage: {
    marginLeft: 20,
  }
});

export default DiningDelivery;