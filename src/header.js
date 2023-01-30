import React from 'react';
import { View , StyleSheet , Text , Image } from 'react-native';
import { useFonts as useOswald, Oswald_300Light } from '@expo-google-fonts/oswald';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

const Header=()=>{
	// chargement de la police Oswald
	let [oswaldLoaded]=useOswald({Oswald_300Light});
	if (!oswaldLoaded) {
		return <AppLoading />;
	} else {
		return(
			<View style={styles.container}>
				<View style={styles.image}>
					<Image source={require('../assets/images/imtd-logo.png')} resizeMode="center" style={{ width:'50%', height:'100%',alignSelf:'flex-start'}} />
				</View>
				<View style={styles.text}>
					<Text style={{alignSelf:'flex-end',fontSize:25, fontFamily: 'Oswald_300Light',fontWeight:'500',marginRight:"10%" }} >Biomi mob'</Text>
				</View>
				<StatusBar style="auto" /> 
			</View>
	
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex:1,
		flexDirection:'row',
		paddingHorizontal:2,
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#e0ffff',
		borderColor:'#00bfff',
		borderRadius:10,

	},
	image: {
		flex:1,
		borderColor: "black",
		justifyContent:'flex-start',
		alignItems:'flex-start',
		height:'100%',
	},
	text:{
		flex:1,
		borderColor: "black",
		justifyContent:'center',
	}
	});
export default Header;