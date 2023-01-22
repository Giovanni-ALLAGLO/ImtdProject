import React, {useState} from 'react';
import { View, StyleSheet, Text} from 'react-native';
import ImageContainer from './imageContainer';
import {useFonts as useOswald, Oswald_300Light } from '@expo-google-fonts/oswald';
import AppLoading from 'expo-app-loading';
import Header from './header';

const images = [
  { uri: require('../assets/images/feuille.png'), id: '1' },
  { uri: require('../assets/images/feuille.png'), id: '2' },
  { uri: require('../assets/images/feuille.png'), id: '3' },

];

const Gaming = () => {
  const [current, setCurrent]= useState();
  let [oswaldLoaded]=useOswald({Oswald_300Light});
    if (!oswaldLoaded) {
        return <AppLoading />;
      } else {
  return ( 
    <View style={styles.container}>
      <Text style={styles.text}>La partie peut commencer</Text>
      <ImageContainer  name='osvald' source={require('../assets/images/feuille.png')} style={{ width: 100,
    height: 100, borderColor:'#00FF00',borderWidth:1, borderRadius:50}}/>
      <View style={styles.bottomImage}>
        {images.map(({ uri, id }) => (
          <ImageContainer name='osvald' key={id} source={ uri } style={{ width: 100,
            height: 100, borderColor:'#00FF00',borderWidth:1, margin:5, borderRadius:50, marginTop: (id==2 ? 40: 0)}}/>
        ))}
      </View>
    </View>
  );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:75,
    alignItems:'stretch',
    justifyContent:'flex-start',
    backgroundColor:'#87ceeb'
  },
  text: {
    alignSelf:'center',
    marginBottom:50,
    fontSize:25,
    fontFamily: 'Oswald_300Light'
  },
  bottomImage:{
    marginTop:'10%',
    padding:3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    alignSelf:'auto',
    borderColor:'white',
    borderWidth: 1,
    borderRadius:20
  }
});

export default Gaming;