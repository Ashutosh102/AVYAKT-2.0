import React, { useState, useEffect } from "react";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import scrollreveal from "scrollreveal";
import Navbar from "./components/Navbar";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./sass/index.scss";
import Footer from "./components/Footer";
function App3() {
    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
      const [theme, setTheme] = useState("dark");
      const changeTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
      };
      useEffect(() => {
        const registerAnimations = () => {
          const sr = scrollreveal({
            origin: "bottom",
            distance: "80px",
            duration: 2000,
            reset: false,
          });
          sr.reveal(
            `
            nav,
            
        `,
            {
              interval: 500,
            }
          );
        };
        registerAnimations();
      }, []);
      window.setTimeout(() => {
        // const home = document.getElementsByClassName("home");
        
        const nav = document.getElementsByTagName("nav");
        nav[0].style.transform = "none";
        
      }, 1500);
  return (
    <div data-theme={theme} className="app-container">
      <ScrollToTop />
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <br/>
      <Contact/>
      <Footer/>
      {/* <Particles
      id="tsparticles"
      init={particlesInit}

      options={{
        "fullScreen": {
            "enable": true,
            "zIndex": 0
        },
        "particles": {
            "number": {
                "value": 30,
                "density": {
                    "enable": false,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#FF004A"
            },
            "shape": {
                "type": "triangle",
                "options": {
                    "sides": 7
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 20,
                    "size_min": 0.3,
                    "sync": false
                }
            },
            "rotate": {
                "value": 0,
                "random": true,
                "direction": "clockwise",
                "animation": {
                    "enable": true,
                    "speed": 3,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 600,
                "color": "#FF004A",
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": ["grab"]
                },
                "onclick": {
                    "enable": false,
                    "mode": "bubble"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "background": {
            "color": "#111",
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
        }
    }}
    /> */}
    </div>
  )
}

export default App3