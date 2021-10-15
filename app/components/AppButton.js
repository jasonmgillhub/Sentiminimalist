import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function AppButton({ title, onPress, color = 'primary' }) {
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: colors[color] }]}
			onPress={onPress}
		>
			<AppText style={styles.text}>{title}</AppText>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 25,
		padding: 12,
		marginVertical: 10,
	},
	text: {
		color: colors.white,
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
});

export default AppButton;
