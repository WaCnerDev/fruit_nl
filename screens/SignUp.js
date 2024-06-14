import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

export default function SignUp({ navigation }) {
  return (
    <ImageBackground 
    source={require('../assets/img_fondo.jpg')} 
    style={styles.background}
  >
    <Image 
          source={require('../assets/logo_fruit.png')}
          style={styles.logo}
        />
      <View style={styles.container}>
      
        <Text style={styles.header}>Crear cuenta nueva</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
        />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Comprobar contraseña"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("RegisterProduct")}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
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
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  logo: {
    width: 150, // Ajusta este valor al tamaño que desees para el logo
    height: 150, // Ajusta este valor al tamaño que desees para el logo
    position: 'absolute',
    top: 50,
    right: 0,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  },
});
