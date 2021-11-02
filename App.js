import React from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from './app/components/Screen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

const AuthStack = createStackNavigator();
const AuthNavigator = () => (
	<AuthStack.Navigator>
		<AuthStack.Screen name="Welcome" component={WelcomeScreen} />
		<AuthStack.Screen name="Login" component={LoginScreen} />
		<AuthStack.Screen name="Register" component={RegisterScreen} />
	</AuthStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const AppNavigator = () => (
	<Tabs.Navigator>
		<Tabs.Screen name="Listings" component={ListingsScreen} />
		<Tabs.Screen name="ListingEdit" component={ListingEditScreen} />
		<Tabs.Screen name="Account" component={AccountScreen} />
	</Tabs.Navigator>
);

export default function App() {
	return (
		<NavigationContainer>
			<AppNavigator />
		</NavigationContainer>
	);
}
