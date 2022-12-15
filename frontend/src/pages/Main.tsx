import Calculator from '../components/Calculator';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../global/Themes';

function Main() {
	return (
		<ThemeProvider theme={darkTheme}>
			<div>
				<h1>League Item Calculator</h1>
				<Calculator />
			</div>
		</ThemeProvider>
	);
}

export default Main;
