import { processFontFamily } from "expo-font";
import React ,{useState} from "react";
import { StyleSheet, Text,TextInput,SafeAreaView, View, Image ,TouchableOpacity} from "react-native";

const PageScore=()=> {

  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
        <SafeAreaView>
          <View>
            <Text style={{color: 'black',fontSize: 15,fontWeight: 'bold' }}>Nom</Text>
            <TextInput style={styles.input}  />
          </View>
          <View>
            <Text style={{color: 'black',fontSize: 15,fontWeight: 'bold'}}>Adresse postale</Text>
            <TextInput style={styles.input} autoComplete ="birthdate-full" />
          </View>
          <View>
            <Text style={{color:'black',fontSize: 15,fontWeight: 'bold'}}>adresse e-mail</Text>
            <TextInput style={styles.input} fontWeight="normal" keyboardType="email-address"  autoComplete="email"  />
          </View>
        </SafeAreaView>
        <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText} >🤗 Vive le Biominétisme 🤗</Text>
        </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical:50,
  },
  input: {
    borderRadius: 2,
    width:300,
    height: 50,
    marginTop: 5,
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor:"#fff5ee",
    fontSize: 15,
    color:"black",
    fontWeight:"400"
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.95,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'black',
    padding: 20,
    marginTop: 60,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
  }
});

export default PageScore;