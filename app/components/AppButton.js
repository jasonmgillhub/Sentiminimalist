import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../config/colors';

function AppButton(props) {
	console.log(props);

	return (
		<View style={{ ...styles.button, ...props.style }}>
			<Text style={styles.text}>{props.children}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		height: 50,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 25,
	},
	text: {
		color: colors.white,
		fontWeight: 'bold',
		fontFamily: 'Roboto',
		fontSize: 18,
	},
});

export default AppButton;
