import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import colors from '../../config/colors';
import Text from '../Text';

function ListItem({
	image,
	onPress,
	renderRightActions,
	renderLeftActions,
	showChevrons,
	style,
	subTitle,
	title,
	IconComponent,
}) {
	return (
		<Swipeable
			renderRightActions={renderRightActions}
			renderLeftActions={renderLeftActions}
		>
			<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
				<View style={[styles.container, style]}>
					{IconComponent}
					{image && <Image style={styles.image} source={image} />}
					<View style={styles.detailsContainer}>
						<Text numberOfLines={1} style={styles.title}>
							{title}
						</Text>
						{subTitle && (
							<Text numberOfLines={2} style={styles.subTitle}>
								{subTitle}
							</Text>
						)}
					</View>
					{showChevrons && (
						<MaterialCommunityIcons
							color={colors.medium}
							name="chevron-right"
							size={25}
						/>
					)}
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
		alignItems: 'center',
	},
	detailsContainer: {
		marginLeft: 10,
		justifyContent: 'center',
		flex: 1,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},
	subTitle: {
		color: colors.medium,
	},
	title: {
		fontWeight: '500',
	},
});

export default ListItem;
