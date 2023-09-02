import Calculator from '../components/Calculator';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../global/Themes';
import Navbar from '../components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../components/About';
import { useEffect, useState, createContext } from 'react';

export const MobileContext = createContext(false);

function Main() {
	const [isMobile, setIsMobile] = useState(false);

	function handleWindowSizeChange() {
		setIsMobile(() => {
			if (window.innerWidth <= 768) {
				return true;
			}
			return false;
		});
	}

	useEffect(() => {
		handleWindowSizeChange();
		window.addEventListener('resize', handleWindowSizeChange);
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		};
	}, []);

	return (
		<ThemeProvider theme={darkTheme}>
			<MobileContext.Provider value={isMobile}>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Calculator isMobile={isMobile} />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</BrowserRouter>
			</MobileContext.Provider>
		</ThemeProvider>
	);
}

export default Main;
