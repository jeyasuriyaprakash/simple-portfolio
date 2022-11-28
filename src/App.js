
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import  Carousel  from './components/Carousel';
import Cards from './components/Cards';
import Foter from './components/Foter';
// import Map from './components/Map';
function App() {
  return (
    <div className="App">
      
    <Header /> 
    <Carousel />
    <Cards />
    <Foter />
   {/* <Map /> */}
      
    </div>
  );
}

export default App;
