import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import About from './components/About';
import App2 from "./App2";
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }/>
        <Route path="/login" element={ <App2 /> }/>
        {/* <Route path="/login" element={ <Contact /> }/> */}
        <Route path="/about" element={<About />} >
        </Route>
      </Routes>
    </BrowserRouter>
    
    
       
  </React.StrictMode>,
  document.getElementById("root")
);
