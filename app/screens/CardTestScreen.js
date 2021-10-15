import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../components/Card';

function CardTestScreen(props) {
	return (
		<View
			style={{
				backgroundColor: '#f8f4f4',
				flex: 1,
			}}
		>
			<Card
				title="Hello"
				subTitle="Monkey"
				image={require('../assets/jacket.jpg')}
			/>
			<Card
				title="Hello"
				subTitle="Monkey"
				image={require('../assets/jacket.jpg')}
			/>
		</View>
	);
}

const styles = StyleSheet.create({});

export default CardTestScreen;
