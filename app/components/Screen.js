import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Platform, View } from 'react-native';

function Screen({ children, style }) {
	return <View style={[styles.screen, style]}>{children}</View>;
}

const styles = StyleSheet.create({
	screen: {
		paddingTop: Constants.statusBarHeight,
		...Platform.select({
			native: {},
			default: {
				maxWidth: 440,
			},
		}),
	},
});

export default Screen;
