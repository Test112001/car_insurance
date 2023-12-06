import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import logo from "./images/Logo.png";
import Hamburger from "hamburger-react";
import Nav2 from "./Nav2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  console.log(user);

  return (
    <div>
      <div className="home_nav">
        <nav className="main_nav">
          <a href="/">
            <img src="logo" alt="logo" className="hid" />
          </a>
          <div className="navlinks_div nav_left">
            <ul className="navlinks">
              <li>
                <a href="/">
                  <img src="logo" alt="logo" />
                </a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
            </ul>
          </div>
          <div className="navlinks_div nav_right">
            <ul className="navlinks">
              <li>
                <a href="#">
                  <div className="nav_claim">
                    <p style={{ marginTop: "3px" }}>
                      Claim, Edit, Renew & More
                    </p>

                    {isAuthenticated ? (
                      <div>
                        <button
                          className="nav_login"
                          onClick={() => {
                            logout();
                          }}
                        >
                          Log Out
                        </button>
                      </div>
                    ) : (
                      <div>
                        <button
                          className="nav_login"
                          onClick={() => {
                            loginWithRedirect();
                          }}
                        >
                          Log In
                        </button>
                      </div>
                    )}

                    {/* <button
                      className="nav_login"
                      onClick={(e) => loginWithRedirect()}
                    >
                      Login <i className="fas fa-chevron-down"></i>
                    </button> */}
                  </div>
                </a>
              </li>
              <li className="nav_help">
                <a href="#">Help</a>
              </li>
            </ul>
          </div>
          <div className="hamburger-menu">
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              duration={0.8}
              size={20}
            />
            <a href="#" className="" onClick={() => setIsOpen(!setIsOpen)}></a>
          </div>
        </nav>
      </div>
      {isOpen ? <Nav2></Nav2> : null}
    </div>
  );
};

export default Navbar;
