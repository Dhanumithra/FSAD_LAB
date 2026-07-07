import './App.css';

import Home from './components/Home';
import Recipes from './components/Recipes';
import Contact from './components/Contact';

function App() {
  return (
    <div className="container">

      <h1>CookBook Application</h1>

      <Home />
      <Recipes />
      <Contact />

    </div>
  );
}

export default App;