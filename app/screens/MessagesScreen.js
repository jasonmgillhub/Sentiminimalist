import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import {
	ListItem,
	ListItemDeleteAction,
	ListItemSendAction,
	ListItemSeparator,
} from '../components/lists';
import Screen from '../components/Screen';

const initialMessages = [
	{
		id: 1,
		title: `Jason Gill`,
		description: `Hey! Is this item still available?`,
		image: require('../assets/jason.jpg'),
	},
	{
		id: 2,
		title: 'Jason Gill',
		description: `I'm interested in this item. When will you be able to post it?`,
		image: require('../assets/jason.jpg'),
	},
];

function MessagesScreen(props) {
	const [messages, setMessages] = useState(initialMessages);
	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = (message) => {
		// Delete the message from messages
		setMessages(messages.filter((m) => m.id !== message.id));
	};

	return (
		<Screen style={styles.screen}>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.description}
						image={item.image}
						onPress={() => console.log('Message selected', item)}
						renderRightActions={() => (
							<ListItemDeleteAction
								onPress={() => handleDelete(item)}
							/>
						)}
						renderLeftActions={() => <ListItemSendAction />}
						showChevrons
					/>
				)}
				ItemSeparatorComponent={() => <ListItemSeparator />}
				refreshing={refreshing}
				onRefresh={() => {
					setMessages([
						{
							id: 2,
							title: 'T2',
							description: 'D2',
							image: require('../assets/jason.jpg'),
						},
					]);
				}}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});

export default MessagesScreen;
