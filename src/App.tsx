import CardContainer from './CardContainer';
import Header from './Header';
import AppContainer from './AppContainer'
import OverviewHeader from './OverviewHeader';
import OverviewCardContainer from './OverviewCardContainer';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Theme';
import { GlobalStyles } from './GlobalStyles';

function App() {
  const [theme, setTheme] = useState('dark')
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <AppContainer>
          <Header onChange={themeToggler} />
          <CardContainer />
          <OverviewHeader />
          <OverviewCardContainer />
        </AppContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;
