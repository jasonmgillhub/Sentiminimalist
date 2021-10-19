import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function IconButton({ style, title, icon, color, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={[styles.container, style]}>
				<View style={[styles.icon, { backgroundColor: colors[color] }]}>
					<MaterialCommunityIcons
						name={icon}
						size={20}
						color={colors.white}
					/>
				</View>
				<AppText style={styles.title}>{title}</AppText>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 15,
		alignItems: 'center',
		backgroundColor: colors.white,
	},
	icon: {
		backgroundColor: colors.primary,
		width: 40,
		height: 40,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		paddingLeft: 10,
	},
});

export default IconButton;
