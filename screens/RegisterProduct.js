import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";

export default function RegisterProduct({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/img_fondo.jpg")}
      style={styles.background}
    >
        <Image 
          source={require('../assets/logo_fruit.png')}
          style={styles.logo}
        />
      <View style={styles.container}>
        <Text style={styles.header}>Produtos</Text>
        <TextInput style={styles.input} placeholder="Nombre Producto" />
        <TextInput style={styles.input} placeholder="Código Producto" />
        <TextInput
          style={styles.input}
          placeholder="Cantidad"
          keyboardType="numeric"
        />
        <TextInput style={styles.input} placeholder="Fecha caducidad" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  logo: {
    width: 150, 
    height: 150, 
    position: 'absolute',
    top: 50,
    right: 0,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
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
});
