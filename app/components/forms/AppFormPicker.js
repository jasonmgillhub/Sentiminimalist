import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({ name, ...otherProps }) {
	const {
		setFieldTouched,
		handleChange,
		setFieldValue,
		errors,
		touched,
		values,
	} = useFormikContext();

	return (
		<>
			<AppPicker
				onSelectItem={(item) => {
					setFieldTouched(name);
					setFieldValue(name, item);
					handleChange(name);
				}}
				onChangeText={handleChange(name)}
				selectedItem={values[name]}
				{...otherProps}
			/>

			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}

export default AppFormPicker;
