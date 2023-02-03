import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Getstarted from './components/Getstarted';
import Applications from './components/Applications';
import Services from './components/Services';
import Why from './components/Why';
import Solutions from './components/Solutions';
import Cards from './components/Cards';
import Whatwedo from './components/Whatwedo';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App" class="ml-20 mr-20 p-10" >
      <Header/>
      <Getstarted/>
      <Applications/>
      <Services/>
      <Why/>
      <Solutions/>
      <Cards/>
      <Whatwedo/>
      <Projects/>
    </div>
  );
}

export default App;
