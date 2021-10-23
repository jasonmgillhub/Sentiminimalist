import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';
import Text from './Text';

function Card({ title, subTitle, image }) {
	return (
		<View style={styles.card}>
			<Image style={styles.image} source={image} />
			<View style={styles.detailsContainer}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.subTitle}>{subTitle}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: colors.white,
		borderRadius: 15,
		marginBottom: 20,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: 200,
	},
	detailsContainer: {
		height: 100,
		padding: 20,
	},
	title: {
		marginBottom: 7,
	},
	subTitle: {
		fontWeight: 'bold',
		color: colors.secondary,
	},
});

export default Card;
