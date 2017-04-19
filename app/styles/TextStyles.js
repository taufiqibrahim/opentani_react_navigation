import {StyleSheet, Dimensions} from 'react-native';
import { COLOR_PRIMARY, COLOR_SECONDARY, COLOR_DEV } from './ColorPalette';

export default StyleSheet.create({
	title: {
		fontFamily: 'sans-serif-light',
		fontSize: 32,
		fontWeight: 'bold',
		alignSelf: 'center',
		textAlign: 'center',
		marginBottom: 8,		
	},
	h1: {
		fontFamily: 'sans-serif-light',
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 8,
		alignSelf: 'center',
		textAlign: 'center',		
	},
	h2: {
		fontFamily: 'sans-serif',
		fontSize: 18,
		alignSelf: 'center',
		textAlign: 'center',
		marginBottom: 8,		
	},
	body: {
		fontFamily: 'sans-serif-light',
		fontSize: 15,
		alignSelf: 'center',
		textAlign: 'center',
		marginBottom: 8,		
	},
	text_title_large: {
		fontFamily: 'sans-serif',
		fontSize: 56,
		color: '#2BA84A',
		alignSelf: 'center',
		textAlign: 'center',
	},
	text_description: {
		fontFamily: 'sans-serif',
		fontSize: 14,
		color: '#505050',
		alignSelf: 'center',
		alignItems: 'stretch',
		textAlign: 'center',
	},
	text_input: {
		fontFamily: 'sans-serif',
		fontSize: 16,
		color: '#505050',
		alignSelf: 'stretch',
		alignItems: 'stretch',
	},
	text_error: {
		fontFamily: 'sans-serif',
		fontSize: 16,
		color: 'red',
		alignSelf: 'stretch',
		alignItems: 'stretch',
	},
	
})