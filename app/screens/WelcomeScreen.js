import React from 'react';
import { View, ImageBackground, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import Text from '../components/Text';

function WelcomeScreen(props) {
	const navigation = useNavigation();

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
				<Text style={styles.tagline}>Sell What You Don't Need</Text>
			</View>
			<View style={styles.buttonsContainer}>
				<Button
					title="login"
					onPress={() => navigation.navigate('Login')}
				/>
				<Button
					title="register"
					color="secondary"
					onPress={() => navigation.navigate('Register')}
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
