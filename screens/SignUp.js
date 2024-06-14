import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image, Alert} from 'react-native';

// Import de Firebase
import appFirebase from '../accesoFireBase';
import { addDoc, collection, getFirestore } from "firebase/firestore";
const db = getFirestore(appFirebase);



export default function SignUp({ navigation }) {
    //conector a base de datos
    const RegistarUsuario = async(navigation)=>{
      try {
        await addDoc(collection(db, 'User'),{...estado})
    
        Alert.alert('Alerta', 'El usuario se registró con éxito')
    
        navigation.navigate('RegisterProduct')
    
      } catch  {
        console.error(error)
      }
    }
  
    const inicioEstado = {
      nombreCompleto: "",
      correoElectronico: "",
      contrasenna:""
    };
  
    const [estado, setEstado] = useState(inicioEstado);
  
    const HandlerChangeText = (value, name) => {
      setEstado({ ...estado, [name]: value });
      console.log(estado);
    };
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
        <Text style={styles.header}>Crear cuenta nueva</Text>
        <TextInput
        onChangeText={(value) => HandlerChangeText(value, "nombreCompleto")}
        value={estado.nombreCompleto}
          style={styles.input}
          placeholder="Nombre completo"
        />
        <TextInput
        onChangeText={(value) => HandlerChangeText(value, "correoElectronico")}
        value={estado.correoElectronico}
          style={styles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
        />
        <TextInput
        onChangeText={(value) => HandlerChangeText(value, "contrasenna")}
        value={estado.contrasenna}
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Comprobar contraseña"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={() => RegistarUsuario(navigation)}>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    zIndex:0,
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
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
    height: 50,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
    color: 'gray',
    marginBottom: 20,
  },
  logo: {
    width: 150, 
    height: 150, 
    position: 'absolute',
    top: 50,
    right: 0,
    opacity: 0.5,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  },
});
