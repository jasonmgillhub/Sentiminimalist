import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({
	style,
	image,
	title,
	subTitle,
	onPress,
	renderRightActions,
	renderLeftActions,
}) {
	return (
		<Swipeable
			renderRightActions={renderRightActions}
			renderLeftActions={renderLeftActions}
		>
			<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
				<View style={[styles.container, style]}>
					<Image style={styles.image} source={image} />
					<View>
						<AppText style={styles.title}>{title}</AppText>
						<AppText style={styles.subTitle}>{subTitle}</AppText>
					</View>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 15,
		backgroundColor: colors.white,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
		marginRight: 10,
	},
	title: {
		fontWeight: '500',
	},
	subTitle: {
		color: colors.medium,
	},
});

export default ListItem;
