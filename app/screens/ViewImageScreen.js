import React from 'react';
import { View, StyleSheet, Image, Button } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ViewImageScreen(props) {
	return (
		<View style={styles.container}>
			<MaterialCommunityIcons
				style={styles.closeIcon}
				name="close"
				size={35}
				color="white"
			/>
			<MaterialCommunityIcons
				style={styles.deleteIcon}
				name="trash-can-outline"
				size={30}
				color="white"
			/>
			<Image
				style={styles.image}
				source={require('../assets/chair.jpg')}
				resizeMode="contain"
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.black,
		flex: 1,
	},
	image: {
		width: '100%',
		height: '100%',
	},
	buttonsContainer: {
		top: 40,
		paddingLeft: 30,
		paddingRight: 30,
	},
	closeIcon: {
		position: 'absolute',
		top: 40,
		left: 30,
	},
	deleteIcon: {
		position: 'absolute',
		top: 40,
		right: 30,
	},
});

export default ViewImageScreen;
