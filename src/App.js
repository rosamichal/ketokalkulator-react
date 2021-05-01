import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from './GlobalStyle';
import { theme } from './theme';
import Header from './components/Header';
import CurrentRecipe from './components/CurrentRecipe';
import RecipeList from './components/RecipeList';
import Footer from './components/Footer';
import { AppContainer } from './components/AppContainer/indeks';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <AppContainer>
        <Header />
        <CurrentRecipe />
        <RecipeList />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
