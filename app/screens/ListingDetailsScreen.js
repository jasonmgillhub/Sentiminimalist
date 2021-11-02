import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from '../components/Text';
import { ListItem } from '../components/lists';
import colors from '../config/colors';

function ListingDetailsScreen({
	title = 'Red jacket for sale',
	price = '$100',
	image = require('../assets/jacket.jpg'),
}) {
	return (
		<View style={styles.view}>
			<Image style={styles.image} source={image} />
			<View style={styles.detailsContainer}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.price}>{price}</Text>
				<View style={styles.userContainer}>
					<ListItem
						image={require('../assets/jason.jpg')}
						title="Jason Gill"
						subTitle="5 Listings"
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		backgroundColor: colors.white,
	},
	image: {
		width: '100%',
		height: 300,
	},
	detailsContainer: {
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: '500',
	},
	price: {
		color: colors.secondary,
		fontWeight: 'bold',
		fontSize: 20,
		marginVertical: 10,
	},
	userContainer: {
		marginVertical: 40,
	},
});

export default ListingDetailsScreen;
