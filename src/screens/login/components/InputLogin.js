import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import { Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { FontAwesome5 } from '@expo/vector-icons';

function InputLogin(props) {
  const {
    onChangeText,
    value,
    secureTextEntry = false,
    placeholder,
    label,
    fontFamily,
    fontFamily2,
  } = props;
  const [showPassword, setShowPassword] = useState(false);

  const [loaded] = useFonts({
    PoppinsBold: Poppins_700Bold,
    PoppinsSemiBold: Poppins_600SemiBold,
    PoppinsMedium: Poppins_500Medium,
    PoppinsRegular: Poppins_400Regular,
    RobotoBold: Roboto_700Bold,
    RobotoRegular: Roboto_400Regular,
  });

  if (!loaded) {
    return null;
  }

  return (
    <View>
      <Text style={[styles.textInfo, {fontFamily: fontFamily}]}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, {fontFamily2: fontFamily}]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !showPassword}
        />
        {secureTextEntry && (
            <TouchableOpacity
              style={styles.eyeIconContainer}
              onPress={() => setShowPassword(!showPassword)}>
              <FontAwesome5
                name={showPassword ? 'eye' : 'eye-slash'}
                size={20}
                color="#FA641E"
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FA641E',
    borderRadius: 15,
    marginVertical: 12,
    marginHorizontal: 24,
  },
  input: {
    flex: 1,
    height: 50,
    padding: 10,
    borderRadius: 15,
  },
  eyeIconContainer: {
    paddingHorizontal: 10,
  },
  eyeIcon: {
    marginLeft: -5,
  },
  textInfo: {
    marginHorizontal: 24,
    marginTop: 5,
    marginBottom: -8,
    fontSize: 13,
    color: '#676767',
    fontFamily: 'PoppinsRegular',
  },
});

export default InputLogin;
