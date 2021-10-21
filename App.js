import React, { useState } from 'react';
import { StyleSheet, Text, View, Platform, Switch } from 'react-native';
import CardTestScreen from './app/screens/CardTestScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import Screen from './app/components/Screen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

const categories = [
	{
		label: 'Furniture',
		value: 1,
	},
	{
		label: 'Clothing',
		value: 2,
	},
	{
		label: 'Camera',
		value: 3,
	},
];

export default function App() {
	const [category, setCategory] = useState(categories[0]);

	return (
		<Screen>
			<AppPicker
				placeholder="Messages"
				icon="apps"
				items={categories}
				selectedItem={category}
				onSelectItem={(item) => setCategory(item)}
			/>
			<AppTextInput placeholder="Username" icon="email" />
		</Screen>
	);
}

const styles = StyleSheet.create({
	appView: {
		width: '100%',
		height: '100%',
	},
});
