import React from 'react';
import { useFormikContext } from 'formik';

import ErrorMessage from './ErrorMessage';
import ImageInputList from '../ImageInputList';

function FormImagePicker({ name }) {
	const { errors, touched, values, setFieldValue } = useFormikContext();
	const imageUris = values[name];

	const handleAddImage = (uri) => {
		setFieldValue(name, [...imageUris, uri]);
	};

	const handleChangeImage = (uri, newUri) => {
		if (newUri) {
			const newImageUris = [...imageUris];
			const i = newImageUris.indexOf(uri);

			newImageUris[i] = newUri;
			setFieldValue(name, newImageUris);
		} else {
			setFieldValue(
				name,
				imageUris.filter((imageUri) => imageUri != uri)
			);
		}
	};

	return (
		<>
			<ImageInputList
				imageUris={imageUris}
				onAddImage={handleAddImage}
				onChangeImage={handleChangeImage}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}

export default FormImagePicker;
