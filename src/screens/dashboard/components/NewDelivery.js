import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { Roboto_700Bold } from '@expo-google-fonts/roboto';
import { LinearGradient } from 'expo-linear-gradient';

import { useNavigation } from '@react-navigation/native';

function NewDelivery() {
  const navigation = useNavigation();
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
    <View style={styles.newDeliveryContainer}>
      <View style={styles.shadowContainer}>
        <View style={styles.container}>
          <Text style={styles.titleDelivery}>Iniciar Nova Entrega</Text>
          <View style={styles.areaInputStyle}>
            <View style={styles.inputContainer}>
              <Text style={styles.titleIdentity}>Número de Identificação</Text>
              <TextInput style={styles.inputIdentity}></TextInput>
            </View>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigation.navigate('Delivery')}>
              <Text style={styles.buttonInput}>OK</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.qrCodeButton}>
            <LinearGradient
              colors={['#FF881F', '#FA641E']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientButton}>
              <View style={styles.buttonContainerQrCode}>
                <View style={styles.buttonQrCodeImage}>
                  <Image
                    source={require('../../../../assets/images/qrcode/qrcode.png')}
                  />
                </View>
                <Text style={styles.buttonTextQRCode}>Escanear Qrcode</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  newDeliveryContainer: {
    marginBottom: 70,
  },
  shadowContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderRadius: 20,
    elevation: 5,
  },
  container: {
    height: 206,
    width: 324,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  titleDelivery: {
    fontFamily: 'PoppinsBold',
    fontSize: 16,
    marginBottom: 10,
    marginHorizontal: 15,
    color: '#333333',
  },
  areaInputStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 15,
  },
  buttonContainer: {
    backgroundColor: '#FA641E',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 46,
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  inputIdentity: {
    borderWidth: 1,
    borderColor: '#FA641E',
    borderRadius: 10,
    height: 44,
    width: 220,
    paddingHorizontal: 10,
  },
  titleIdentity: {
    fontFamily: 'PoppinsRegular',
    fontSize: 12,
    color: '#707070',
  },
  buttonInput: {
    fontFamily: 'PoppinsMedium',
    fontSize: 17,
    color: '#FFFFFF',
  },
  buttonTextQRCode: {
    fontFamily: 'PoppinsMedium',
    color: '#FFFFFF',
    fontSize: 16,
  },
  buttonQrCodeImage: {
    marginHorizontal: 10,
  },
  buttonContainerQrCode: {
    flexDirection: 'row',
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientButton: {
    borderRadius: 15,
    height: 46,
    width: '100%',
  },
  qrCodeButton: {
    marginTop: 1,
    marginHorizontal: 16,
  },
});

export default NewDelivery;
