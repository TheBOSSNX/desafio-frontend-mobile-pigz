import React from 'react';
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
import { Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';

import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';

import Logo from './components/Logo';
import InputLogin from './components/InputLogin';
import GoogleButton from './components/GoogleButton';

const Login = ({ navigation }) => {
  const [loaded] = useFonts({
    PoppinsBold: Poppins_700Bold,
    PoppinsSemiBold: Poppins_600SemiBold,
    PoppinsMedium: Poppins_500Medium,
    PoppinsRegular: Poppins_400Regular,
    RobotoBold: Roboto_700Bold,
    RobotoRegular: Roboto_400Regular,
  });

  const [inputValues, setInputValues] = React.useState({
    username: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = React.useState('');

  const handleInputChange = (fieldName, value) => {
    setInputValues({
      ...inputValues,
      [fieldName]: value,
    });
  };

  const isFormValid = () => {
    return inputValues.username !== '' && inputValues.password !== '';
  };

  const handleLogin = () => {
    if (isFormValid()) {
      navigation.navigate('Dashboard');
    } else {
      setErrorMessage('Por favor, preencha todos os campos.');
    }
  };

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.titleText}>Login</Text>
      <InputLogin
        label="Email ou Telefone"
        fontFamily="PoppinsRegular"
        placeholder="example@pigz.com.br"
        onChangeText={(text) => handleInputChange('username', text)}
        value={inputValues.username}
      />
      <InputLogin
        label="Senha"
        fontFamily="RobotoRegular"
        fontFamily2="RobotoRegular"
        secureTextEntry={true}
        onChangeText={(text) => handleInputChange('password', text)}
        value={inputValues.password}
      />

      <Text style={styles.forgotPassword}>Esqueci minha senha</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <LinearGradient
          colors={['#FF881F', '#FA641E']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientButton}>
          <Text style={styles.buttonText}>Entrar</Text>
        </LinearGradient>
      </TouchableOpacity>

      {errorMessage !== '' && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}

      <View style={styles.createAccountContainer}>
        <Text style={styles.semConta1}>Não tem uma Conta?</Text>
        <TouchableOpacity>
          <Text style={styles.semConta2}>Criar agora!</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divisorGoogle}>
        <Text style={styles.entrarCom}>Entrar com</Text>
        <View style={styles.divisor} />
      </View>

      <GoogleButton />
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

Login.navigationOptions = {
  title: 'Dashboard',
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  titleText: {
    fontFamily: 'PoppinsSemiBold',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 6,
    marginTop: 5,
    marginHorizontal: 24,
    color: '#222222',
  },
  forgotPassword: {
    fontFamily: 'PoppinsRegular',
    marginBottom: 6,
    marginTop: 12,
    textDecorationLine: 'underline',
    opacity: 0.7,
    fontSize: 13,
    marginHorizontal: 24,
    color: '#676767',
  },
  button: {
    marginVertical: 12,
    marginHorizontal: 24,
    minHeight: 50,
  },
  buttonText: {
    fontFamily: 'PoppinsSemiBold',
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  gradientButton: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  semConta1: {
    fontSize: 13,
    fontFamily: 'PoppinsRegular',
    marginRight: 5,
    color: '#676767',
  },
  semConta2: {
    fontSize: 13,
    fontFamily: 'PoppinsRegular',
    color: '#FA641E',
  },
  divisorGoogle: {
    flexDirection: 'row',
    marginTop: 45,
    alignItems: 'center',
  },
  entrarCom: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 13,
    marginLeft: 24,
  },
  divisor: {
    flex: 1,
    height: 1,
    backgroundColor: '#676767',
    marginLeft: 5,
    marginRight: 24,
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Login;
