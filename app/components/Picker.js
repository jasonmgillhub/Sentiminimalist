import React, { useState } from 'react';
import {
	Button,
	FlatList,
	Modal,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles';
import Text from './Text';
import Screen from './Screen';
import PickerItem from './PickerItem';
import colors from '../config/colors';

function AppPicker({
	icon,
	items,
	numberOfColumns = 1,
	onSelectItem,
	PickerItemComponent = PickerItem,
	placeholder,
	selectedItem,
	width = '100%',
}) {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={[styles.container, { width }]}>
					{selectedItem && (
						<MaterialCommunityIcons
							style={styles.icon}
							name={selectedItem.icon}
							size={20}
							color={selectedItem.backgroundColor}
						/>
					)}
					{icon && !selectedItem && (
						<MaterialCommunityIcons
							style={styles.icon}
							name={icon}
							size={20}
							color={defaultStyles.colors.medium}
						/>
					)}
					<Text
						style={[
							defaultStyles.text,
							styles.text,
							{
								color: selectedItem
									? colors.black
									: colors.medium,
							},
						]}
					>
						{selectedItem ? selectedItem.label : placeholder}
					</Text>
					<MaterialCommunityIcons
						name="chevron-down"
						size={20}
						color={defaultStyles.colors.medium}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType="slide">
				<Screen>
					<Button
						title="Close"
						onPress={() => setModalVisible(false)}
					/>
					<FlatList
						data={items}
						keyExtractor={(item) => item.value.toString()}
						numColumns={numberOfColumns}
						renderItem={({ item }) => (
							<PickerItemComponent
								item={item}
								label={item.label}
								onPress={() => {
									setModalVisible(false);
									onSelectItem(item);
								}}
							/>
						)}
					/>
				</Screen>
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors.light,
		borderRadius: 25,
		flexDirection: 'row',
		width: '100%',
		padding: 15,
		marginVertical: 10,
		alignItems: 'center',
	},
	icon: {
		marginRight: 10,
	},
	text: {
		flex: 1,
	},
});

export default AppPicker;
