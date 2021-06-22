import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from './GlobalStyle';
import { theme } from './theme';
import Header from './components/Header';
import CurrentRecipe from './components/CurrentRecipe';
import RecipeList from './components/RecipeList';
import Footer from './components/Footer';
import { AppContainer } from './components/AppContainer/indeks';
import { useDispatch } from 'react-redux';
import { getIngredients } from './redux/ingredientsSlice';
import { Toaster } from 'react-hot-toast';
import ScrollTopArrow from './components/common/ScrollTopArrow';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch])

  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <AppContainer>
        <Header />
        <CurrentRecipe />
        <RecipeList />
        <Footer />
        <ScrollTopArrow />
        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 3000,
            success: {
              style: {
                background: '#E7F2DA',
                color: '#006E00',
              },
              iconTheme: {
                primary: '#006E00',
              },
            },
            error: {
              style: {
                background: '#FFEBE6',
                color: '#E54D2B',
              },
            },
          }} />
      </AppContainer>
    </ThemeProvider >
  );
}

export default App;
