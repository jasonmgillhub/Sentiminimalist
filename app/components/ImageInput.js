import React, { useEffect, useState } from 'react';
import {
	Button,
	Image,
	StyleSheet,
	TouchableHighlight,
	TouchableOpacity,
	View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';
import colors from '../config/colors';

function ImageInput(props) {
	const [imageUri, setImageUri] = useState();

	const requestPermission = async () => {
		const { granted } =
			await ImagePicker.requestMediaLibraryPermissionsAsync();

		if (!granted) {
			alert('You need to enable permission to access the library.');
		}
	};

	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync();
			if (!result.cancelled) {
				setImageUri(result.uri);
			}
		} catch (error) {
			console.error('Error reading an image');
		}
	};

	useEffect(() => {
		function request() {
			requestPermission();
		}

		request();
	}, []);

	return (
		<TouchableOpacity onPress={selectImage} style={styles.container}>
			<>
				{!imageUri && (
					<MaterialCommunityIcons
						name="camera"
						size={40}
						color={colors.medium}
					/>
				)}
				{imageUri && (
					<Image source={{ uri: imageUri }} style={styles.image} />
				)}
			</>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: colors.light,
		borderRadius: 15,
		height: 100,
		justifyContent: 'center',
		margin: 10,
		overflow: 'hidden',
		width: 100,
	},
	image: {
		height: 100,
		width: 100,
	},
});

export default ImageInput;
