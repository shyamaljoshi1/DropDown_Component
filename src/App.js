import './globalstyle.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home';
import Country from './pages/country';


const App = () => {
 
  return (
    <BrowserRouter>
      <Routes>
          
          <Route path="/home" element={<Home/> } />
          <Route path="/" element={<Home />} />
          <Route path="/country" element={<Country/> }/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
