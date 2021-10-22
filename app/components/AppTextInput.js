import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles';

function AppTextInput({ icon, onChangeText, ...otherProps }) {
	const [text, setText] = useState();

	return (
		<View style={styles.container}>
			{icon && (
				<MaterialCommunityIcons
					style={styles.icon}
					name={icon}
					size={20}
					color={
						text
							? defaultStyles.colors.black
							: defaultStyles.colors.medium
					}
				/>
			)}
			<TextInput
				onChangeText={(t) => {
					setText(t);
					onChangeText(t);
				}}
				placeholderTextColor={defaultStyles.colors.medium}
				style={[defaultStyles.text, styles.input]}
				{...otherProps}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: defaultStyles.colors.light,
		borderRadius: 25,
		flexDirection: 'row',
		marginVertical: 10,
		padding: 15,
		width: '100%',
	},
	icon: {
		marginRight: 10,
	},
	input: {
		width: '100%',
	},
});

export default AppTextInput;
