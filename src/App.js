import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Create from "./components/Create";
import Update from "./components/Update";
import Pnf from "./components/Pnf";
import Products from "./components/screens/Products";

function App(){
  return(
    <BrowserRouter>
      <Menu/>
      <ToastContainer autoClose={400} position={"top-right"} />
      <Routes>
        <Route path={`/`} element={<Home/>} />
        <Route path={`/create`} element={<Create/>} />
        <Route path={`/category/:cName/products`} element={<Products/>} />
        <Route path={`/update/:id`} element={<Update/>} />
        <Route path={`/*`} element={<Pnf/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App