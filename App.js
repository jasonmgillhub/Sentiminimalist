import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import CardTestScreen from './app/screens/CardTestScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
	return <WelcomeScreen />;
}

const styles = StyleSheet.create({
	appView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
