import React, { useState } from 'react';
import ImageInputList from './app/components/ImageInputList';
import Screen from './app/components/Screen';

export default function App() {
	const [imageUris, setImageUris] = useState([]);

	const handleAddImage = (uri) => {
		setImageUris([...imageUris, uri]);
	};

	const handleRemoveImage = (uri) => {
		setImageUris(imageUris.filter((imageUri) => imageUri != uri));
	};

	return (
		<Screen>
			<ImageInputList
				imageUris={imageUris}
				onAddImage={handleAddImage}
				onRemoveImage={handleRemoveImage}
			/>
		</Screen>
	);
}
