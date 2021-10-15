import React from 'react';
import {
	StyleSheet,
	View,
	ImageBackground,
	// Image,
	// TouchableWithoutFeedback,
	// TouchableOpacity,
	// TouchableHighlight,
	// TouchableNativeFeedback,
	// Button,
	// Alert,
	// Platform,
	// SafeAreaView,
	// StatusBar,
} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
// import {
// 	useDimensions,
// 	useDeviceOrientation,
// } from '@react-native-community/hooks';

export default function App() {
	return <WelcomeScreen />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		flex: 1,
		justifyContent: 'center',
	},
	text: {
		color: 'white',
		fontSize: 42,
		lineHeight: 84,
		fontWeight: 'bold',
		textAlign: 'center',
		backgroundColor: '#000000c0',
	},
});
