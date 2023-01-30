import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Gaming from './introductionPage';
import PagePresentation from './presentationPage';
import PageScore from './scorePage';
import { NavigationContainer } from '@react-navigation/native';

/**
 * pile de navigation
 */
const Stack = createStackNavigator();
/**
 * cette constante gere les navigation entre les différents écrans
 */
const AppNavigator = ()=>{
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={PagePresentation} />
				<Stack.Screen name="Game" component={Gaming} />
				<Stack.Screen name="Score" component={PageScore} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;

