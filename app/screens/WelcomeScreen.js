import React from 'react';
import { View, ImageBackground, StyleSheet, Image, Text } from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';

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
				<AppText style={styles.tagline}>
					Sell What You Don't Need
				</AppText>
			</View>
			<View style={styles.buttonsContainer}>
				<AppButton title="login" onPress={() => console.log('login')} />
				<AppButton
					title="register"
					color="secondary"
					onPress={() => console.log('register')}
				/>
			</View>
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
	tagline: {
		paddingVertical: 20,
		fontSize: 25,
		fontWeight: 'bold',
	},
	buttonsContainer: {
		width: '100%',
		padding: 20,
	},
});

export default WelcomeScreen;
