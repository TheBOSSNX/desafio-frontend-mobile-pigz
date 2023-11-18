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

import ButtonTabBar from './ButtonTabBar';

function TabBar() {
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
    <View style={styles.tabBar}>
      <ButtonTabBar name='Relatórios' fontFamily='PoppinsRegular' icon={require('../../../../assets/images/relatorios/relatorios.png')}/>
      <ButtonTabBar style={styles.homeIconStyle} fontFamily='PoppinsMedium' color='#FA641E' name='Visão Geral' icon={require('../../../../assets/images/visaogeral/visaogeral.png')}/>
      <ButtonTabBar name='Perfil' fontFamily='PoppinsRegular' icon={require('../../../../assets/images/perfil/perfil.png')}/>
    </View>
  )

}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
  },
});

export default TabBar;