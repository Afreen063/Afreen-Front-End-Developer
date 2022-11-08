
import './App.css';
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Navi from './components/Navi'
import MyProject from './components/MyProject'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navi />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/MyProject" element={<MyProject />} />
       <Route path="/AboutMe" element={<AboutMe />} />
       
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
