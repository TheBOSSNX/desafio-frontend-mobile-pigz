import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import { Roboto_700Bold } from '@expo-google-fonts/roboto';

function BallsLine(props) {
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

  const { textBall, textSmallBall1, textSmallBall2, fontFamily } = props;

  return (
    <View style={styles.ballsContainer}>
      <View style={styles.bigBallcontainer}>
        <View style={styles.ball}></View>
        <Text style={[styles.textBall, {fontFamily: fontFamily}]}>{textBall}</Text>
      </View>
      <View style={styles.smallBallContainer}>
        <View style={styles.circle}></View>
        <View style={styles.smallBallTextContainer}>
          <Text style={styles.textSmallBalls}>{textSmallBall1}</Text>
          <Text style={styles.textSmallBalls}>{textSmallBall2}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ballsContainer: {
    flexDirection: 'column',
    marginLeft: 10,
    marginTop: 12,
  },
  ball: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: '#FA641F',
    marginVertical: 5,
  },
  circle: {
    width: 9,
    height: 9,
    borderRadius: 5,
    borderColor: '#FA641F',
    borderWidth: 1,
    marginVertical: 5,
    backgroundColor: '#FFFFFF',
  },
  bigBallcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -3,
    marginTop: 2,
  },
  smallBallContainer: {
    flexDirection: 'row',
    marginTop: 3, 
    
  },
  smallBallTextContainer: {
    marginLeft: 12,
  },
  textBall: {
    color: '#FA641F',
    fontSize: 18,
    marginLeft: 9,
    marginTop: 4,
    
  },
  textSmallBalls: {
    fontSize: 14,
    fontFamily: 'PoppinsRegular',
    color: '#707070',
    
  }
});

export default BallsLine;
