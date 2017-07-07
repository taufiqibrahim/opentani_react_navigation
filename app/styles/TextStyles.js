import {StyleSheet, Dimensions} from 'react-native';
import { COLOR_PRIMARY, COLOR_SECONDARY, COLOR_DEV } from './ColorPalette';

export default StyleSheet.create({
	XL: {
		fontFamily: 'sans-serif-light',
		fontSize: 48,
		fontWeight: 'bold',
		alignSelf: 'center',
		textAlign: 'center',
		marginBottom: 8,		
	},
	TITLE: {
		fontFamily: 'sans-serif-light',
		fontSize: 36,
		fontWeight: 'bold',
		alignSelf: 'center',
		textAlign: 'center',
		marginBottom: 8,		
	},
	H1: {
		fontFamily: 'sans-serif-light',
		fontSize: 28,
		fontWeight: 'bold',
		alignSelf: 'center',
		textAlign: 'center',		
	},
	H2: {
		fontFamily: 'sans-serif',
		fontSize: 20,
		alignSelf: 'center',
		textAlign: 'center',	
	},
	BODY: {
		fontFamily: 'sans-serif-light',
		fontSize: 16,
		alignSelf: 'center',
		textAlign: 'center',
		margin: 8,		
	},
	BODYSMALL: {
		fontFamily: 'sans-serif-light',
		fontSize: 14,
		alignSelf: 'center',
		textAlign: 'center',
		margin: 8,		
	},
	SUBTITLE: {
		fontFamily: 'sans-serif-light',
		fontSize: 32,
		textAlign: 'center',
		marginBottom: 8,			
	},
	DESCRIPTION: {
		fontFamily: 'sans-serif',
		fontSize: 14,
		color: '#505050',
		alignSelf: 'center',
		alignItems: 'stretch',
		textAlign: 'center',
	},
	INPUT: {
		flex: 1,
		flexDirection: 'column',
		fontFamily: 'sans-serif-light',
		fontSize: 32,
		fontWeight: 'normal',
		textAlign: 'center',
	},
	ERROR: {
		fontFamily: 'sans-serif',
		fontSize: 16,
		color: 'red',
		alignSelf: 'stretch',
		alignItems: 'stretch',
	},
	GUIDE: {
		fontFamily: 'sans-serif-light',
		fontSize: 24,
		marginBottom: 8,
		alignSelf: 'center',
		textAlign: 'center',	
	},
	
})