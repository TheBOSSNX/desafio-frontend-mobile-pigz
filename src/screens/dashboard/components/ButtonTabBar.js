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

function ButtonTabBar(props) {
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

  const { name, icon, fontFamily, color } = props;
  return (
    <TouchableOpacity style={styles.buttonTabBar}>
      <View style={styles.tabBarIcon}>
        <Image source={icon}/>
      </View>
      <Text style={[styles.nameTabBar, { fontFamily: fontFamily }, {color: color}]}>{name}</Text>
      
    
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  buttonTabBar: {
    alignItems: 'center',
    flex: 1,
    
  },
  tabBarIcon: {},
  nameTabBar: {
    fontSize: 10,
  },
});

export default ButtonTabBar;