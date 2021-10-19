import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import IconButton from '../components/IconButton';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';

const menuButtons = [
	{
		id: 0,
		title: 'My Listings',
		icon: 'format-list-bulleted',
		color: 'primary',
	},
	{
		id: 1,
		title: 'My Messages',
		icon: 'email',
		color: 'secondary',
	},
];

const logOutButton = {
	id: -1,
	title: 'Log Out',
	icon: 'logout',
	color: 'yellow',
};

function MyAccountScreen() {
	return (
		<Screen style={styles.container}>
			<ListItem
				title={'Mosh Hamedani'}
				subTitle={'programmingwithmosh@gmail.com'}
				image={require('../assets/mosh.jpg')}
			/>
			<FlatList
				style={styles.menuButtons}
				data={menuButtons}
				keyExtractor={(button) => button.id.toString()}
				renderItem={({ item }) => (
					<IconButton
						title={item.title}
						icon={item.icon}
						color={item.color}
					/>
				)}
			/>
			<IconButton
				title={logOutButton.title}
				icon={logOutButton.icon}
				color={'yellow'}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
	},
	menuButtons: {
		paddingTop: 40,
		paddingBottom: 20,
	},
});

export default MyAccountScreen;
