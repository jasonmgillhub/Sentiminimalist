import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from './Text';
import Icon from './Icon';

function CategoryPickerItem({ item, onPress }) {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Icon
				backgroundColor={item.backgroundColor}
				name={item.icon}
				size={80}
			></Icon>
			<Text style={styles.label}>{item.label}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 25,
		paddingVertical: 15,
		alignItems: 'center',
		width: '33%',
	},
	label: {
		marginTop: 5,
		textAlign: 'center',
	},
});

export default CategoryPickerItem;
