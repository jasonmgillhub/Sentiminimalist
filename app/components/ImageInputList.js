import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
	useEffect(() => {
		console.log(imageUris);
	}, [imageUris]);

	return (
		<View style={styles.container}>
			{imageUris.map((uri) => (
				<View key={uri} style={styles.image}>
					<ImageInput
						imageUri={uri}
						onChangeImage={() => onRemoveImage(uri)}
					/>
				</View>
			))}
			<ImageInput onChangeImage={onAddImage} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	image: { marginRight: 10 },
});

export default ImageInputList;
