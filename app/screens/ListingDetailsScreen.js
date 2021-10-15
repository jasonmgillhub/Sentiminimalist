import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import colors from '../config/colors';

function ListingDetailsScreen(props) {
	return (
		<View style={styles.view}>
			<Image
				style={styles.image}
				source={require('../assets/jacket.jpg')}
			/>
			<View style={styles.textContainer}>
				<Text style={styles.title}>Red jacket for sale</Text>
				<Text style={styles.price}>$100</Text>
				<View style={styles.lister}>
					<Image
						style={styles.listerImage}
						source={require('../assets/mosh.jpg')}
					/>
					<View style={styles.listerTextContainer}>
						<Text style={styles.listerName}>Mosh Hamedani</Text>
						<Text style={styles.listerListings}>5 Listings</Text>
					</View>
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
	textContainer: {
		margin: 20,
	},
	title: {
		fontSize: 24,
		marginBottom: 10,
	},
	price: {
		color: colors.secondary,
		fontSize: 18,
	},
	lister: {
		marginTop: 50,
		flexDirection: 'row',
	},
	listerImage: {
		width: 60,
		height: 60,
		borderRadius: 30,
		marginRight: 10,
	},
	listerTextContainer: {},
	listerName: {},
	listerListings: {
		color: 'grey',
	},
});

export default ListingDetailsScreen;
