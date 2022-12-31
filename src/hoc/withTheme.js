import { ThemeContextProvider } from 'context/ThemeContext';

// eslint-disable-next-line react/display-name
export const withTheme = Page => props => {
	return (
		<ThemeContextProvider>
			<Page {...props} />
		</ThemeContextProvider>
	);
};
