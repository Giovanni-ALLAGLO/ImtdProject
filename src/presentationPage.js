import React from "react";
import { ImageBackground , StyleSheet , Text , View , Image , TouchableOpacity } from "react-native";
import Header from "./header.js";

/**
 * 
 * @param {props} {navigation}
 * @returns 
 */
const PagePresentation=({ navigation })=> {
	/**
	 * navigue vers la page introductionPage.js
	 */
	const goTo=()=>{navigation.navigate("Game");};
	return (
		<ImageBackground source={require('../assets/imageFolder/Gecko(c)FAANEdePixabay.jpg')} resizeMode="repeat" style={styles.container}>
			<View style={{flex: 0.15}}>
				<Header />
			</View>
			<View style={styles.imageVue}>
				<View style={{ flex:1,backgroundColor:'#fffafa',borderColor:'#00bfff',borderWidth:0.5, borderRadius:20 ,alignSelf:"flex-start",width: "100%",height:"100%"}}>
					<Image source={require('../assets/images/arbre.png')} resizeMode="center" style={styles.image}></Image>
				</View>
				<View style={{flex:1}}>
					<Text style={styles.title}> Qu est ce que le biomimetisme ?</Text>
				</View>
			</View>
			<View style={styles.imageVue}>
				<View style={{flex:1,alignSelf:"flex-end"}}>
					<Text style={styles.title}> Inspirons nous de la nature et developper des solutions efficaces et	durables</Text>
				</View>
				<View style={{ flex:1,backgroundColor:'#fffafa',borderColor:'#00bfff',borderWidth:0.5,borderRadius:20,width: "100%",height:"100%"}}>
					<Image source={require('../assets/images/ornithopter.png')} resizeMode="center" style={styles.image}></Image>
				</View>
			</View>
			<TouchableOpacity style={styles.button} onPress={goTo}>
				<Text style={styles.buttonText} >Commencer</Text>
			</TouchableOpacity>
		</ImageBackground>
	);
}
const styles = StyleSheet.create({
	container: {
		flex:1,
		flexDirection:'column',
		paddingHorizontal:1,
		justifyContent: 'space-between',
	},
	image: {
		width: "100%",
		height:"100%",
		justifyContent:'flex-start',
		alignSelf:'flex-start',
	},
	title: {
		color: 'black',
		fontSize: 25,
		fontStyle: 'italic',
		textAlign: 'center',
		fontWeight:"700"
	},
	button: {
		width:'50%',
		backgroundColor: 'black',
		padding: 15,
		marginBottom:20,
		borderRadius:15,
		alignItems: 'center',
		alignSelf:"center",
	},
	buttonText: {
		color: 'white',
		fontSize: 15,
		fontStyle: 'italic',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	imageVue:{
		flex:0.2,
		justifyContent:'flex-start',
		alignItems:'flex-start',
		flexDirection: "row",
	},
	image:{
		flex: 1,
		justifyContent: 'center',
	}
});

export default PagePresentation;