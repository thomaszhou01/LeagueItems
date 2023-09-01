import Calculator from '../components/Calculator';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../global/Themes';
import Navbar from '../components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../components/About';

function Main() {
	return (
		<ThemeProvider theme={darkTheme}>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Calculator />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default Main;
