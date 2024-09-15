import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {Box} from "@chakra-ui/react";

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";

import NavBar from "./components/NavBar";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import SearchForm from "./components/SearchForm";
import { Search } from "./pages/Search";

function App() {
  return (
    <Box className="App" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <BrowserRouter>
        <NavBar />
        <SearchForm/>
       
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products/:id/info" element={<Info/>}/>
          <Route path="/products/:id" element={<Product/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/company" element={<Navigate to ="/about"/>}/>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
