import {StyleSheet, Dimensions} from 'react-native';
import {
  COLOR_GREEN,
  COLOR_BACKGND,
} from './ColorPalette';

export default StyleSheet.create({

	button_fill_large: {
		height: 48,
		backgroundColor: COLOR_GREEN,
		borderRadius: 8,
		alignSelf: 'stretch',
		alignItems: 'stretch',
		justifyContent: 'center',
		marginTop: 8,	
		marginBottom: 8,
	},

	text_button_fill_large: {
		fontFamily: 'sans-serif',
		fontSize: 24,
		color: '#FCFFFC',
		alignSelf: 'center',
		alignItems: 'stretch',
		textAlign: 'center',
	},

	button_line_large: {
		height: 48,
		borderColor: COLOR_GREEN,
		borderWidth: 2,
		borderRadius: 8,
		alignSelf: 'stretch',
		alignItems: 'stretch',
		justifyContent: 'center',
		marginTop: 8,	
		marginBottom: 8,
	},

	text_button_line_large: {
		fontFamily: 'sans-serif',
		fontSize: 24,
		color: COLOR_GREEN,
		alignSelf: 'center',
		alignItems: 'stretch',
		textAlign: 'center',
	},

	button_fill_small: {
		height: 36,
		backgroundColor: COLOR_GREEN,
		borderRadius: 8,
		alignSelf: 'stretch',
		alignItems: 'stretch',
		justifyContent: 'center',
		marginTop: 8,	
		marginBottom: 8,
	},

	text_button_fill_small: {
		fontFamily: 'sans-serif',
		fontSize: 20,
		color: '#FCFFFC',
		alignSelf: 'center',
		alignItems: 'stretch',
		textAlign: 'center',
	},

	button_line_small: {
		height: 36,
		borderColor: COLOR_GREEN,
		borderWidth: 2,
		borderRadius: 8,
		alignSelf: 'stretch',
		alignItems: 'stretch',
		justifyContent: 'center',
		marginTop: 8,	
		marginBottom: 8,
	},

	text_button_line_small: {
		fontFamily: 'sans-serif',
		fontSize: 20,
		color: COLOR_GREEN,
		alignSelf: 'center',
		alignItems: 'stretch',
		textAlign: 'center',
	},
	
})