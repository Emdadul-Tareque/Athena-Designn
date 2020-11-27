import './App.css';
import Achievement from './Components/Achievement/Achievement';

import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home/Home';
import Purchase from './Components/Purchase/Purchase';
import Service from './Components/Services/Service';

function App() {
  return (
    <div className='col-12'>
      <Home></Home>
      <Service></Service>
      <Contact></Contact>
      <Achievement></Achievement>
      <Purchase></Purchase>
      <Footer></Footer>
    </div>
  );
}

export default App;
