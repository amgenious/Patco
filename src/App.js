import './App.css';
import { Section5 } from './Components/Section5';
import { Header } from './Components/Header';
import { Section1 } from './Components/Section1';
import { Section2 } from './Components/Section2';
import { Section3 } from './Components/Section3';
import { Section4 } from './Components/Section4';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
}

export default App;
