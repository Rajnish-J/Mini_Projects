import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.jsx';
import Offer from './components/offer_section/Offer.jsx'
import Week from './components/week_highlights/Week.jsx'
import Popular from './components/popular/Popular.jsx'

function App() {



  return (
    <div className="App">

      <Header />
      <Offer />
      <Week/>
      <Popular/>
    </div>
  );
}

export default App;