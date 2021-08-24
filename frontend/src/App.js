import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/global';

import defaultTheme from './assets/styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
