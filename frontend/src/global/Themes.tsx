import { createTheme } from '@mui/material';

export const ButtonThemes = createTheme({
	palette: {
		primary: {
			main: '#ffffff',
		},
	},
});

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
	typography: {
		fontFamily: 'Merriweather Sans, sans-serif',
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
	},
});
