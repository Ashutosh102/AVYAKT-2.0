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
import Comingsoon from "./components/Comingsoon";
import Blindcoding from "./components/Blindcoding";
import Codebug from "./components/Codebug";
import Poster from "./components/Poster";
import InnovativePoster from "./components/InnovativePoster";
import Quiz from "./components/Quiz";
import Soccer from "./components/Soccer";
import Robot from "./components/Robot";
import Aboutus from "./components/Aboutus";
import Webp  from "./components/Webp";
import Hackathon from "./components/Hackathon";
import Workshop from "./components/Workshop";
import Guest from "./components/Guest";
import Gaming  from "./components/Gaming";
import GD from "./components/GD";
import Thunt from "./components/Thunt";
import GK from "./components/GK";
import Craft from "./components/Craft";
import Rangoli from "./components/Rangoli";
import Musical from "./components/Musical";
import Eureka from "./components/Eureka";
import Got  from "./components/Got";

import Spotpainting from "./components/Spotpainting";
import Cartoon from "./components/Cartoon";
import Fashion from "./components/Fashion";
import Tshirt from "./components/Tshirt";
import Songs from "./components/Songs";
import Dance from "./components/Dance";
import Mimicry from "./components/Mimicry";
import Drama from "./components/Drama";
import Stall from "./components/Stall";
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
        <Route path="/about-team" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/coming" element={<Comingsoon />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/blind" element={<Blindcoding />} />
        <Route path="/debug" element={<Codebug />} />
        <Route path="/poster" element={<Poster />} />
        <Route path="/inn-poster" element={<InnovativePoster />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/soccer" element={<Soccer />} />
        <Route path="/robot" element={<Robot />} />
        <Route path="/webp" element={<Webp />} />
        <Route path="/hack" element={<Hackathon />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/guest" element={<Guest />} />

        <Route path="/t-shirt" element={<Tshirt />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/gd" element={<GD />} />
        <Route path="/thunt" element={<Thunt />} />
        <Route path="/gk" element={<GK />} />
        <Route path="/craft" element={<Craft />} />
        <Route path="/rangoli" element={<Rangoli />} />
        <Route path="/musical" element={<Musical />} />
        <Route path="/eureka" element={<Eureka />} />
        <Route path="/got" element={<Got />} />
        <Route path="/spot" element={<Spotpainting />} />
        <Route path="/cartoon" element={<Cartoon />} />

        
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/tshirt" element={<Tshirt />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/dance" element={<Dance />} />
        <Route path="/mimicry" element={<Mimicry />} />
        <Route path="/drama" element={<Drama />} />
        <Route path="/stall" element={<Stall />} />


        <Route path="/android-dev" element={<Andev />} >
        </Route>
      </Routes>
    </BrowserRouter>
    
    
       
  </React.StrictMode>
  </CookiesProvider>,
  document.getElementById("root")
);
