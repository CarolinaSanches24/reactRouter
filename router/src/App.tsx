import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Box} from "@chakra-ui/react";

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";

import NavBar from "./components/NavBar";
import Product from "./pages/Product";

function App() {
  return (
    <Box className="App" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products/:id" element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
