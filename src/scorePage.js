import React from "react";
import { StyleSheet , Text , View , Button } from "react-native";
import Header from "./header";
/**
 * 
 * @param {props} { route, navigation }
 * @returns resultat du jeux :page Score
 */
const PageScore=({route, navigation })=> {
	/**
	 * nbvrai: nombre de bonnes reponses
	 * nbfaux: nombre de fausses reponses
	 */
	const { nbvrai,nbfaux} = route.params
	return(
        <View style={styles.container}>
			<View>
				<Text>Holla! Bien jouer et voici votre score</Text>
				<Header/>
			</View>
			<View>
				<Text>Bonne reponse :{nbvrai}</Text>
				<Text>Nombre de tentative: {nbfaux+nbvrai} </Text>
				<Text> 🤗Merci de votre participation </Text>
			</View>
			<Button title="Retour a l'acceuil" onPress={()=>{navigation.navigate('Home')}}/>

        </View>
    );
}
const styles = StyleSheet.create({
	container: {
		flex:1,
		flexDirection:'column',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-between',
	}
});
export default PageScore;