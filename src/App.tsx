import "./App.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contacts } from "./components/Contacts";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <div className="header">
            <div className="header-info">
              <img
                className="img-logo-ts"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
                alt="ts-logo"
              />
              <h3>Diana Moldabergenova</h3>
              <p className="text-programmer">Future programmer </p>
            </div>
            <nav>
              <ul className="header-button">
                <li>
                  <NavLink to="/" className="active">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="active two-active">
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contacts" className="active">
                    Contacts
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
        <div className="line"></div>
        <div className="footer">
          <div className="container-footer">
            <h3 className="title-text-footer">Phone</h3>

            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </div>
          <div className="container-footer">
            <h3 className="title-text-footer">Email</h3>
            <a href="mailto:info@mysite.com">info@mysite.com</a>
          </div>
          <div className="container-footer">
            <h3 className="title-text-footer">Follow Me</h3>
            <div>
              <a href="#">
                <img
                  className="link-element"
                  src="https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_30,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6ea5b4a88f0b4f91945b40499aa0af00.png"
                  alt="instagram"
                />
              </a>
              <a href="#">
                <img
                  className="link-element"
                  src="https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_30,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c7d035ba85f6486680c2facedecdcf4d.png"
                  alt="twitter"
                />
              </a>
            </div>
          </div>
          <div>
            <p className="text-end">© 2023 Diana Moldabergenova</p>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};
