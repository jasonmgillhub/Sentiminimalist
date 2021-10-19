import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Icon({
	name,
	size = 40,
	backgroundColor = '#000',
	iconColor = '#fff',
}) {
	return (
		<View
			style={[
				styles.icon,
				{
					backgroundColor,
					width: size,
					height: size,
					borderRadius: size / 2,
				},
			]}
		>
			<MaterialCommunityIcons
				name={name}
				size={size / 2}
				color={iconColor}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	icon: {
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Icon;
