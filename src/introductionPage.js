import React, {useState} from 'react';
import { View, StyleSheet , Text , Image , TouchableOpacity } from 'react-native';
import { Modal } from 'react-native-web';
import ImageContainer from './imageContainer';
import { useFonts as useOswald , Oswald_300Light } from '@expo-google-fonts/oswald';
import AppLoading from 'expo-app-loading';
import Header from './header';

/**
 * @type{const} imageFolderPrincipales liste des images principales
 * 
 * images de l'exemple biologique des pages courantes
 */
const imageFolderPrincipales = [
	{ uri:require('../assets/imageFolder/araignee(c)Tom de Pixabay .jpg'), id: '1' },
	{ uri:require('../assets/imageFolder/baleine(c)Brigitte Werner de Pixabay.jpg'), id: '2' },
	{ uri:require('../assets/imageFolder/martinPecheur(c)Henk van Dorp de Pixabay.jpg'), id: '3' }
]

/**
 * @type{const} imageFolder liste des images secondaires
 * 
 * images des choix des realisations bio-inspirées
 */
const imageFolder = [
	[
		{ uri: require('../assets/images/feuille.png'), id: '10' },
		{ uri: require('../assets/imageFolder/filResistant(c)J32 de Pixabay.jpg'), id: '1' },
		{ uri: require('../assets/images/feuille.png'), id: '10' }
	],
	[
		{ uri: require('../assets/imageFolder/eolienne(c)JackieLou DL de Pixabay .jpg'), id: '2' },
		{ uri: require('../assets/images/feuille.png'), id: '10' },
		{ uri: require('../assets/images/feuille.png'), id: '10' } 
	],
	[
		{ uri: require('../assets/images/feuille.png'), id: '10' },
		{ uri: require('../assets/imageFolder/shinkansen(c)Peter Wieser de Pixabay.jpg'), id: '3' },
		{ uri: require('../assets/images/feuille.png'), id: '10' } 
	],
];

/**
 * 
 * @param {props} { navigation }
 * @returns page Game
 */
const Gaming = ({ navigation }) => {

	//parametre du State de la vue modale 
	const [modalVisible, setModalVisible] = useState(false);

	//parametre de State du nombre de mauvaises reponses
	const [nbfaux, setNbfaux]= useState(0);

	//parametre de State permettant de gerer l'affichage des images courantes
	const [current, setCurrent]= useState(0);
		
	//parametre de State permettant de gerer l'affichage des descriptions
	const [currentDescr, setCurrentDescr]= useState(0);
	/**
	 * let [oswaldLoaded] permet de s'assurer que la police Oswald est disponoble lors du chargement de la page.
	 */
	let [oswaldLoaded]=useOswald({Oswald_300Light});
	if (!oswaldLoaded) {
		return <AppLoading />;
	}else {
		return ( 
			<View style={styles.container}>
				<Header/>
				{/**
				 *Modal component Vue permettant de faire afficher la description du concept biomimétique
				 */}
				<Modal
				animationType="fade"
				transparent={false}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(false);
				}}>
					<View style={{flex:1,justifyContent:'space-around' }}>
				
					<Image source={imageFolderPrincipales[currentDescr].uri} resizeMode="center" style={{flex:0.5}} />	
					<Text style={styles.title} > Bravo🔥...cette vue modale vous fournit une explication sur le concept biomimétique correspondant</Text>
					<TouchableOpacity style={styles.button} onPress={() => {
						setModalVisible(false);if(currentDescr!=2){setCurrentDescr(currentDescr+1)};
						}}>
					<Text style={styles.buttonText} >fermer</Text>
					</TouchableOpacity>
					</View>
				</Modal>
				<Text style={styles.text}>La partie peut commencer</Text>
				<ImageContainer  name='osvald' source={imageFolderPrincipales[current].uri} style={styles.image2}/>
				<View style={styles.bottomImage}>
					<ImageContainer name='osvald'  source={ imageFolder[current][0].uri } style={styles.image1} 
				onPress={() => {if(imageFolderPrincipales[current].id==imageFolder[current][0].id){
					if(current==2){setModalVisible(true);navigation.navigate("Score",{
						nbfaux,
						});}
						else{
						setModalVisible(true);setCurrent(current+1)}
					}else{
						setNbfaux(nbfaux+1);}}}/>
					<ImageContainer name='osvald' source={ imageFolder[current][1].uri } style={styles.image2} 
				onPress={() => {if(imageFolderPrincipales[current].id==imageFolder[current][1].id){
					if(current==2){setModalVisible(true);navigation.navigate("Score",{
					nbfaux,
					});}
					else{
					setModalVisible(true);setCurrent(current+1)}
				}else{
					setNbfaux(nbfaux+1);}}}/>
					<ImageContainer name='osvald' source={ imageFolder[current][2].uri } style={styles.image1}
				onPress={() => {if(imageFolderPrincipales[current].id==imageFolder[current][2].id){
					if(current==2){setModalVisible(true);navigation.navigate("Score",{
						nbfaux,
						});}
						else{
						setModalVisible(true);setCurrent(current+1)}
					}else{
						setNbfaux(nbfaux+1);}}}/>
				</View>
			</View>
  );
  }
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
		marginBottom:'10%',
		padding:3,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'flex-start',
		alignSelf:'auto',
		borderColor:'white',
		borderWidth: 1,
		borderRadius:20
	},
	image1:{
		width: 100,
		height: 100,
		borderColor:'#00FF00',
		borderWidth:1,
		margin:5,
		borderRadius:50,
		marginTop: 50
	},
	image2:{
		width: 100,
		height: 100,
		borderColor:'#00FF00',
		borderWidth:1,
		margin:5,
		borderRadius:50
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
		marginTop:50,
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
});

export default Gaming;
/*
//-- Chemin relatif de certaines images--
{ uri: require('../assets/imageFolder/chauve souris(c)Marcel Langthim de Pixabay.jpg'), id: '4' },
{ uri: require('../assets/imageFolder/colibri(c)George de Pixabay.jpg'), id: '5' },
{ uri: require('../assets/imageFolder/faucon(c) ev de Pixabay .jpg'), id: '6' },
{ uri: require('../assets/imageFolder/martinPecheur(c)Henk van Dorp de Pixabay.jpg'), id: '7' },
{ uri: require('../assets/imageFolder/Gecko(c)FAANE de Pixabay.jpg'), id: '8' },
{ uri: require('../assets/imageFolder/lotus(c)andrew kim de Pixabay .jpg'), id: '9' },
{ uri: require('../assets/imageFolder/fourmis(c)monsterpong09 de Pixabay.jpg'), id: '10' },
{ uri: require('../assets/imageFolder/moules(c)Stefan Schweihofer de Pixabay .jpg'), id: '11' },
{ uri: require('../assets/imageFolder/nageoireDauphin(c)StockSnap de Pixabay.jpg'), id: '12' },
{ uri: require('../assets/imageFolder/ovipositeurGuepe(c)Francisco Corado Rivera de Pixabay.jpg'), id: '13' },
{ uri: require('../assets/imageFolder/papillon(c)Gaby de Pixabay.jpg'), id: '14' },
{ uri: require('../assets/imageFolder/pic-bois(c)Kurt Bouda de Pixabay.jpg'), id: '15' },
{ uri: require('../assets/imageFolder/pygargue(c)Freizeitheld de Pixabay.jpg'), id: '16' },
{ uri: require('../assets/imageFolder/requin(c)Christel SAGNIEZ de Pixabay.jpg'), id: '17' },
{ uri: require('../assets/imageFolder/termitiere(c)Indranil Sarker de Pixabay.jpg'), id: '18' },

*/