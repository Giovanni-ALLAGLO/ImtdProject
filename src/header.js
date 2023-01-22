import React from 'react';
import { View, StyleSheet, Text ,Image } from 'react-native';
import {useFonts as useOswald, Oswald_300Light } from '@expo-google-fonts/oswald';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

const Header=()=>{
    let [oswaldLoaded]=useOswald({Oswald_300Light});
    if (!oswaldLoaded) {
        return <AppLoading />;
      } else {
    return(
        <View style={styles.container}>
            <Image source={require('../assets/imtd-logo.png')} resizeMode="center" style={styles.image} />
            <Text  style={styles.text} >Biomi mob'</Text>
            <StatusBar style="auto" />
        </View>
    );
}
}


const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingVertical:50,
      paddingHorizontal:10,
      justifyContent: 'space-between',
    },
    image: {
        width: "20%",
        height:"100%",
    },
    text:{
        fontSize: 15,
        fontFamily: 'Oswald_300Light'
    }
  });
export default Header;