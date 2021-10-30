import React, { useEffect, useState } from 'react';
import {
	Alert,
	Image,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import colors from '../config/colors';

function ImageInput({ imageUri, onChangeImage }) {
	const handlePress = () => {
		if (!imageUri) {
			selectImage();
		} else {
			Alert.alert(
				'Delete or Change',
				`Would you like to delete or change your image?`,
				[
					{
						text: 'Delete',
						onPress: () => onChangeImage(null),
					},
					{
						text: 'Change',
						onPress: () => selectImage(),
					},
					{
						text: 'No',
					},
				]
			);
		}
	};

	const requestPermission = async () => {
		const { granted } =
			await ImagePicker.requestMediaLibraryPermissionsAsync();

		if (!granted) {
			alert('You need to enable permission to access the library.');
		}
	};

	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 0.5,
			});

			if (!result.cancelled) {
				onChangeImage(result.uri);
			}
		} catch (error) {
			console.error('Error reading an image');
		}
	};

	useEffect(() => {
		requestPermission();
	}, []);

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.container}>
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
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: colors.light,
		borderRadius: 15,
		height: 100,
		justifyContent: 'center',
		overflow: 'hidden',
		width: 100,
	},
	image: {
		height: '100%',
		width: '100%',
	},
});

export default ImageInput;
