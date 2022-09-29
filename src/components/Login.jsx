/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import * as Components from "./components";
import "../sass/index.scss";
import eth1 from "../assets/GIET.png";
import eth2 from "../assets/avyakt-L1.png";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';


function Login() {
    const [signIn, toggle] = React.useState(true);
  
  return (
    <Components.Main>
    <Components.Container>
    <div className="image-container">
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form method="POST" action="/">
          <Components.Title>Create Account</Components.Title>
          <Components.Input type="text" placeholder="Name" />
          <Components.Input type="email" placeholder="Email" />
          <Components.Input type="text" placeholder="Roll no" />
          <Components.Input type="password" placeholder="Password" />
          <Components.Button name="submit"
                  type="submit">Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Sign in</Components.Title>
          <Components.Input type="email" placeholder="Email" />
          <Components.Input type="password" placeholder="Password" />
          <Components.Anchor href="#">
            Forgot your password?
          </Components.Anchor>
          <Components.Button name="submit"
                  type="submit">Sign In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>
      <Components.OverlayContainer signingIn={signIn}>
        <Components.Overlay signingIn={signIn}>
          <Components.LeftOverlayPanel signingIn={signIn}>
          <img src={eth1} alt="eth1" loading="lazy" />
          <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
             Please login with your info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
            <br/>
            
            <Components.GhostButton>
            <Link to="/" style={{textDecoration:"none", color:"white"}}>
              Home
            </Link>
            </Components.GhostButton>
          </Components.LeftOverlayPanel>
          <Components.RightOverlayPanel signingIn={signIn}>
          <img src={eth2} alt="eth2" loading="lazy" />
            <Components.Title>Hello GIETian!!</Components.Title>
            <Components.Paragraph>
            Start Enying the Fest!!
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
            <br/>
            <Components.GhostButton>
            <Link to="/" style={{textDecoration:"none", color:"white"}}>
              Home
            </Link>
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
      <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
      </div>
    </Components.Container>
    </Components.Main>
  )
}

export default Login