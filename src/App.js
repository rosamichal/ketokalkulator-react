import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from './GlobalStyle';
import { theme } from './theme'
import { Header } from './components/Header'
import { AppContainer } from './components/AppContainer/indeks';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <AppContainer>
        <Header />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
