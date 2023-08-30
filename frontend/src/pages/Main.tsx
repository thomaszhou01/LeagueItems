import Calculator from '../components/Calculator';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import { darkTheme } from '../global/Themes';

function Main() {
	return (
		<ThemeProvider theme={darkTheme}>
			<Calculator />
		</ThemeProvider>
	);
}

export default Main;
