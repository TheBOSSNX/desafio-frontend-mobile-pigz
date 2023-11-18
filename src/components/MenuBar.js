import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins';

import { Roboto_700Bold } from '@expo-google-fonts/roboto';

function MenuBar(props) {
  const [loaded] = useFonts({
    Poppins: Poppins_600SemiBold,
    PoppinsRegular: Poppins_400Regular,
    PoppinsMedium: Poppins_500Medium,
    RobotoBold: Roboto_700Bold,
  });

  if (!loaded) {
    return null;
  }

  const { titleDelivery, onPress } = props;
  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={styles.arrowStyle}
          source={require('../../assets/images/arrow_back_black_24dp/arrow_back_black_24dp.png')}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.titleDelivery}>{titleDelivery}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleDelivery: {
    fontFamily: 'PoppinsMedium',
    fontSize: 18,
    textAlign: 'center',
    marginRight: 25,
  },
  menu: {
    marginTop: 50,
    flexDirection: 'row',
    marginHorizontal: 16,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center', 
  },
  arrowStyle: {
    width: 24,
    height: 24,
  }
});

export default MenuBar;
