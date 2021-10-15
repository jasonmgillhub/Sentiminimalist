import React from 'react';
import { View, ImageBackground, StyleSheet, Image, Text } from 'react-native';
import colors from '../config/colors';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
	return (
		<ImageBackground
			style={styles.background}
			source={require('../assets/background.jpg')}
			blurRadius={3}
		>
			<View style={styles.logoView}>
				<Image
					style={styles.logoImage}
					source={require('../assets/logo-red.png')}
				/>
				<Text style={styles.logoText}>Sell What You Don't Need</Text>
			</View>

			<AppButton style={styles.loginButton}>LOGIN</AppButton>
			<AppButton style={styles.registerButton} color="secondary">
				REGISTER
			</AppButton>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	logoView: {
		position: 'absolute',
		top: 70,
		alignItems: 'center',
	},
	logoImage: {
		width: 100,
		height: 100,
	},
	logoText: {
		marginTop: 20,
		fontSize: 24,
		fontWeight: 'bold',
	},
	loginButton: {
		width: '90%',
		marginTop: 20,
	},
	registerButton: {
		backgroundColor: colors.secondary,
		margin: 20,
		width: '90%',
	},
});

export default WelcomeScreen;
