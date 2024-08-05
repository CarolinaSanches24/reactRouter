import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';

function App() {

  return (
    <div className='App'>
      <h1>React Router</h1>
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
           <Route path="/about" element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App
