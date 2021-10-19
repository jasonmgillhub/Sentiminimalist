import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ListItemSendAction(props) {
	return (
		<View style={styles.container}>
			<MaterialCommunityIcons
				name={'share'}
				size={35}
				color={colors.white}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'green',
		width: 70,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default ListItemSendAction;
