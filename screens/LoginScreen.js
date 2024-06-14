import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Image} from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <ImageBackground 
      source={require('../assets/img_fondo.jpg')} 
      style={styles.background}
    >
      <View style={styles.container}>
      <Image 
          source={require('../assets/logo_fruit.png')}
          style={styles.logo}
        />

        
        <TextInput
          style={styles.input}
          placeholder="correo electrónico"
          placeholderTextColor="#837B7B"
        />
        
        <TextInput
          style={styles.input}
          placeholder="contraseña"
          placeholderTextColor="#837B7B"
          secureTextEntry
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.footerText}>Crear cuenta nueva</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SingUp")}>
          <Text style={[styles.footerText, styles.linkText]}>Regístrate</Text>
          </TouchableOpacity>
          <Text style={[styles.footerText, styles.linkText]}>¿Olvidó contraseña?</Text>
        </View>
        </View>
        
      
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    zIndex:0,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    width:'80%',
    height: 400,
    backgroundColor:'white',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150, 
    height: 150, 
    position: 'absolute',
    top: 50,
    right: 0,
    opacity: 0.5,
  },
  input: {
    height: 50,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    width:200,
    backgroundColor: '#871f1f',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
  linkText: {
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
});

export default LoginScreen;
