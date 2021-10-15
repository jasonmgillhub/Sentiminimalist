import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import colors from '../config/colors';

function Card(props) {
	return (
		<View style={styles.card}>
			<Image style={styles.image} source={props.image} />
			<View
				style={{
					height: 100,
					padding: 20,
					borderBottomLeftRadius: 20,
					borderBottomRightRadius: 20,
					backgroundColor: colors.white,
				}}
			>
				<Text style={styles.title}>{props.title}</Text>
				<Text style={styles.price}>$100</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		// backgroundColor: colors.white,
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	image: {
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		width: '100%',
		height: 200,
	},
	title: {
		fontSize: 16,
		marginBottom: 10,
	},
	price: {
		fontSize: 16,
		fontWeight: 'bold',
		color: colors.secondary,
	},
});

export default Card;
