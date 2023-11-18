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

import {Roboto_700Bold,} from '@expo-google-fonts/roboto';

function GoogleButton() {
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
    <View style={styles.googleButtonContainer}>
      <TouchableOpacity style={styles.googleButton}>
        <View style={styles.googleIconContainer}>
          <Image
            source={require('../../../../assets/images/logo_googleg_48dp/logo_googleg_48dp.png')}
          />
        </View>

        <Text style={styles.googleButtonText}>Continuar com o Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  googleButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 24,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#9F9F9F',
  },
  googleButtonText: {
    fontFamily: 'PoppinsMedium',
    color: '#676767',
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default GoogleButton;
