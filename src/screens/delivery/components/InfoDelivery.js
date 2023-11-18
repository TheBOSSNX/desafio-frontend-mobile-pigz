import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import { Roboto_700Bold } from '@expo-google-fonts/roboto';

function InfoDelivery(props) {
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

  const { titleInfo, textInfo, fontSize} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.titleInfo}>{titleInfo}</Text>
      <Text style={[styles.textInfo, {fontSize: fontSize}]}>{textInfo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleInfo: {
    fontFamily: 'PoppinsRegular',
    color: '#707070',
    fontSize: 14,
    alignItems: 'center',
  },
  textInfo: {
    color: '#FA641F',
    fontFamily: 'PoppinsBold',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 30,
    marginTop: 50,
    alignItems: 'center',
  }
});

export default InfoDelivery;