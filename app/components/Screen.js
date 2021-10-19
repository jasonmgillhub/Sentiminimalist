import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet, Platform, View } from 'react-native';

function Screen({ children, style }) {
	return (
		<SafeAreaView style={[styles.screen, style]}>
			{children}
			{/* <View style={style}>{children}</View> */}
		</SafeAreaView>
	);
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
