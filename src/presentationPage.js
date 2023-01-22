import React ,{useState} from "react";
import { StyleSheet, Text, View, Image ,TouchableOpacity} from "react-native";



const PagePresentation=()=> {;
  const validate=()=>{
    props.navigation.navigate("Saisie d'information");
  };
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
        <View style={styles.imageVue}>
            <Image source={require('../assets/images/oiseau.jpg')} resizeMode="center" style={styles.image}></Image>
        </View>
        <Text style={styles.title} > </Text>
        <TouchableOpacity style={styles.button} onPress={validate}>
        <Text style={styles.buttonText} >Start with our application</Text>
        </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.95,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  title: {
    color: 'black',
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'black',
    padding: 12,
    paddingHorizontal: 18,
    borderRadius: 51,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageVue:{
    flex:0.7,
    marginTop: 0,
    paddingVertical: 10,
    flexDirection: "row",
  }
});
export default PagePresentation;