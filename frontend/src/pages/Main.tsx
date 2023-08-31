import Calculator from '../components/Calculator';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import { darkTheme } from '../global/Themes';
import Navbar from '../components/Navbar';

function Main() {
	return (
		<ThemeProvider theme={darkTheme}>
			<Navbar />
			<Calculator />
		</ThemeProvider>
	);
}

export default Main;
