import { Image, Text, View, StyleSheet } from 'react-native';
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import {Roboto_700Bold,} from '@expo-google-fonts/roboto';

function Logo() {
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
    <View style={styles.logoContainer}>
      <Image
        style={styles.logoImage}
        source={require('../../../../assets/images/pigz-logotipo-branco/pigz-logotipo-branco.png')}
      />
      <Text style={{fontFamily: 'PoppinsSemiBold',
    fontWeight: '600', fontSize: 18}}>Para entregadores</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    marginTop: 10,
    marginBottom: -45,
  },
});

export default Logo;