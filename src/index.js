import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CookiesProvider } from "react-cookie";
import About from './components/About';
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import Events from "./components/Events";
import Andev from "./components/Andev";
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";

ReactDOM.render(
  <CookiesProvider>
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }/>
        <Route path="/login" element={ <App2 /> }/>
        <Route path="/contact" element={ <App3 /> }/>
        <Route path="/reset" element={ <App4 /> }/>
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/android-dev" element={<Andev />} >
        </Route>
      </Routes>
    </BrowserRouter>
    
    
       
  </React.StrictMode>
  </CookiesProvider>,
  document.getElementById("root")
);
