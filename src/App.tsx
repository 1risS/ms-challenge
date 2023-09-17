import './App.css';
import CardContainer from './CardContainer';
import Header from './Header';
import AppContainer from './AppContainer'
import OverviewHeader from './OverviewHeader';
import OverviewCardContainer from './OverviewCardContainer';

function App() {
  return (
    <div className="App">
      <AppContainer>
        <Header />
        <CardContainer />
        <OverviewHeader />
        <OverviewCardContainer />
      </AppContainer>
    </div>
  );
}

export default App;
