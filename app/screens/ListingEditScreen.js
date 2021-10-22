import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import AppFormPicker from '../components/forms/AppFormPicker';
import Screen from '../components/Screen';

const categories = [
	{
		value: 0,
		label: 'Up',
	},
	{
		value: 1,
		label: 'Down',
	},
	{
		value: 2,
		label: 'Left',
	},
];

const validationSchema = Yup.object().shape({
	category: Yup.object().required().nullable().label('Category'),
	description: Yup.string().label('Description'),
	price: Yup.number().required().min(1).max(10000).label('Price'),
	title: Yup.string().required().min(1).label('Title'),
});

function ListingEditScreen() {
	return (
		<Screen style={styles.container}>
			<AppForm
				initialValues={{
					category: '',
					description: '',
					price: 0,
					title: '',
				}}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<AppFormField
					placeholder="Title"
					autoCapitalize="sentences"
					autoCorrect
					name="title"
				/>
				<AppFormField
					keyboardType="number-pad"
					placeholder="Price"
					name="price"
				/>
				<AppFormPicker
					items={categories}
					name="category"
					placeholder="Category"
				/>
				<AppFormField
					autoCapitalize
					autoCapitalize="sentences"
					name="description"
					placeholder="Description"
				/>
				<SubmitButton title="Post" />
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
});

export default ListingEditScreen;
