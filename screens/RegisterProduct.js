import React, {useState} from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  Alert
} from "react-native";
// Import de Firebase
import appFirebase from '../accesoFireBase';
import { addDoc, collection, getFirestore } from "firebase/firestore";
const db = getFirestore(appFirebase);


export default function RegisterProduct({ navigation }) {
  //conector a base de datos
  const RegistarProducto = async(navigation)=>{
    try {
      await addDoc(collection(db, 'Product'),{...estado2})
  
      Alert.alert('Alerta', 'El producto se registró con éxito')
  
      navigation.navigate('LoginScreen')
  
    } catch  {
      console.error(error)
    }
  }

  const inicioEstado = {
    nombreProducto: "",
    codigoProducto: "",
    cantidad:"",
    fechaCaducidad: ""
  };

  const [estado2, setEstado] = useState(inicioEstado);

  const HandlerChangeText = (value, name) => {
    setEstado({ ...estado2, [name]: value });
    console.log(estado2);
  };

  return (
    <ImageBackground
      source={require("../assets/img_fondo.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/logo_fruit.png")}
          style={styles.logo}
        />

        <Text style={styles.header}>Produtos</Text>
        <TextInput style={styles.input} placeholder="Nombre Producto" onChangeText={(value) => HandlerChangeText(value, "nombreProducto")}/>
        <TextInput style={styles.input} placeholder="Código Producto" onChangeText={(value) => HandlerChangeText(value, "codigoProducto")}/>
        <TextInput
          style={styles.input}
          placeholder="Cantidad"
          keyboardType="numeric"
          onChangeText={(value) => HandlerChangeText(value, "cantidad")}
        />
        <TextInput style={styles.input} placeholder="Fecha caducidad" onChangeText={(value) => HandlerChangeText(value, "fechaCaducidad")} />
        <TouchableOpacity style={styles.button} onPress={() => RegistarProducto(navigation)}>
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "100%",
    zIndex: 0,
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    position: "absolute",
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
    color: 'gray',
    marginBottom: 20,
  },
  button: {
    width: 200,
    backgroundColor: "#871f1f",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
