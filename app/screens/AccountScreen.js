import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Icon from '../components/Icon';
import { ListItem } from '../components/lists';
import Screen from '../components/Screen';
import colors from '../config/colors';

const menuItems = [
	{
		title: 'My Listings',
		icon: {
			name: 'format-list-bulleted',
			backgroundColor: colors.primary,
		},
	},
	{
		title: 'My Messages',
		icon: {
			name: 'email',
			backgroundColor: colors.secondary,
		},
	},
];

const logOutButton = {
	title: 'Log Out',
	icon: {
		name: 'logout',
		backgroundColor: colors.yellow,
	},
};

function AccountScreen() {
	return (
		<Screen style={styles.container}>
			<ListItem
				title={'Jason Gill'}
				subTitle={'jasonmgill@gmail.com'}
				image={require('../assets/jason.jpg')}
			/>
			<FlatList
				style={styles.menuButtons}
				data={menuItems}
				keyExtractor={(button) => button.title}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						IconComponent={
							<Icon
								name={item.icon.name}
								backgroundColor={item.icon.backgroundColor}
							/>
						}
					/>
				)}
			/>
			<ListItem
				title={logOutButton.title}
				IconComponent={
					<Icon
						name={logOutButton.icon.name}
						backgroundColor={logOutButton.icon.backgroundColor}
					/>
				}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
	},
	menuButtons: {
		marginVertical: 25,
	},
});

export default AccountScreen;
