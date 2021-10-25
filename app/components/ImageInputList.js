import React from 'react';
import { StyleSheet, View } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList(props) {
	return (
		<View style={styles.container}>
			<ImageInput />
			<ImageInput />
			<ImageInput />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
});

export default ImageInputList;
