import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import CardTestScreen from './app/screens/CardTestScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingsScreen from './app/screens/ListingsScreen';

export default function App() {
	return (
		// <View style={styles.appView}>
		<ListingsScreen />
		// </View>
	);
}

const styles = StyleSheet.create({
	appView: {
		width: '100%',
		height: '100%',
	},
});
