import { Platform } from 'react-native';
import colors from './colors';

export default {
	colors,
	text: {
		color: colors.dark,
		fontSize: 18,
		...Platform.select({
			android: {
				fontFamily: 'Roboto',
			},
			ios: {
				fontFamily: 'Avenir',
			},
		}),
	},
};
