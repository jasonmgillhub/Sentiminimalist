import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label('Email'),
	name: Yup.string().required().min(2).label('Name'),
	password: Yup.string().required().min(4).label('Password'),
});

function RegisterScreen() {
	return (
		<Screen style={styles.container}>
			<AppForm
				initialValues={{ email: '', name: '', password: '' }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<AppFormField
					icon="account"
					placeholder="Name"
					autoCapitalize="words"
					autoCorrect={false}
					name="name"
				/>
				<AppFormField
					icon="email"
					placeholder="Email"
					autoCapitalize="none"
					autoCorrect={false}
					keyboardType="email-address"
					name="email"
					textContentType="emailAddress"
				/>
				<AppFormField
					autoCapitalize="none"
					autoCorrect={false}
					icon="lock"
					name="password"
					placeholder="Password"
					secureTextEntry
					textContentType="password"
				/>
				<SubmitButton title="Register" />
			</AppForm>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
});

export default RegisterScreen;
