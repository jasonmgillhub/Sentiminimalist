import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import CategoryPickerItem from '../components/CategoryPickerItem';

import {
	Form,
	FormField as Field,
	FormPicker as Picker,
	SubmitButton,
} from '../components/forms';
import Screen from '../components/Screen';

const categories = [
	{
		value: 1,
		label: 'Furniture',
		icon: 'floor-lamp',
		backgroundColor: '#fc5c65',
	},
	{
		value: 2,
		label: 'Cars',
		icon: 'car',
		backgroundColor: '#fd9644',
	},
	{
		value: 3,
		label: 'Cameras',
		icon: 'camera',
		backgroundColor: '#fed330',
	},
	{
		value: 4,
		label: 'Games',
		icon: 'cards',
		backgroundColor: '#26de81',
	},
	{
		value: 5,
		label: 'Clothing',
		icon: 'shoe-heel',
		backgroundColor: '#2bcbba',
	},
	{
		value: 6,
		label: 'Sports',
		icon: 'basketball',
		backgroundColor: '#45aaf2',
	},
	{
		value: 7,
		label: 'Movies & Music',
		icon: 'headphones',
		backgroundColor: '#4b7bec',
	},
	{
		value: 8,
		label: 'Books',
		icon: 'book-open-variant',
		backgroundColor: '#9E73EB',
	},
	{
		value: 99,
		label: 'Other',
		icon: 'border-none-variant',
		backgroundColor: '#8996A4',
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
			<Form
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
					numberOfColumns={3}
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
			</Form>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
});

export default ListingEditScreen;
