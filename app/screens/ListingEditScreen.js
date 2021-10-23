import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import CategoryPickerItem from '../components/CategoryPickerItem';

import {
	AppForm,
	AppFormField as Field,
	AppFormPicker as Picker,
	SubmitButton,
} from '../components/forms';
import Screen from '../components/Screen';
import colors from '../config/colors';

const categories = [
	{
		value: 1,
		label: 'Furniture',
		icon: 'floor-lamp',
	},
	{
		value: 2,
		label: 'Cars',
		icon: 'car',
	},
	{
		value: 3,
		label: 'Cameras',
		icon: 'camera',
	},
	{
		value: 4,
		label: 'Games',
		icon: 'cards',
	},
	{
		value: 5,
		label: 'Clothing',
		icon: 'shoe-heel',
	},
	{
		value: 6,
		label: 'Sports',
		icon: 'basketball',
	},
	{
		value: 7,
		label: 'Movies & Music',
		icon: 'headphones',
	},
	{
		value: 8,
		label: 'Books',
		icon: 'book-open-variant',
	},
	{
		value: 99,
		label: 'Other',
		icon: 'border-none-variant',
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
					category: null,
					description: '',
					price: '',
					title: '',
				}}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<Field
					autoCapitalize="sentences"
					autoCorrect
					maxLength={255}
					name="title"
					placeholder="Title"
				/>
				<Field
					keyboardType="numeric"
					maxLength={8}
					name="price"
					placeholder="Price"
					width={120}
				/>
				<Picker
					items={categories}
					name="category"
					PickerItemComponent={CategoryPickerItem}
					placeholder="Category"
					width="50%"
				/>
				<Field
					autoCapitalize
					autoCapitalize="sentences"
					maxLength={255}
					multiline
					name="description"
					numberOfLines={3}
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
