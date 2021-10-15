import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import CardTestScreen from './app/screens/CardTestScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
	return (
		<View style={styles.appView}>
			<ViewImageScreen />
		</View>
	);
}

const styles = StyleSheet.create({
	appView: {
		width: '100%',
		height: '100%',
		...Platform.select({
			default: {
				maxWidth: 440,
			},
		}),
	},
});
