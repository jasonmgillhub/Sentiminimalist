import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';

const listings = [
	{
		id: 0,
		title: 'Red Jacket',
		price: '100',
		image: require('../assets/jacket.jpg'),
	},
	{
		id: 1,
		title: 'Rad Jacket 2',
		price: '200',
		image: require('../assets/jacket.jpg'),
	},
];

function ListingsScreen(props) {
	return (
		<Screen style={styles.screen}>
			<FlatList
				data={listings}
				keyExtractor={(listing) => listing.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subTitle={'$' + item.price}
						image={item.image}
					/>
				)}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 20,
		backgroundColor: colors.light,
	},
});

export default ListingsScreen;
