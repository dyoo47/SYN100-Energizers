import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import About from "./About";
import ViewSample from "./ViewSample";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom/client";
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavItem,
  NavLink,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtom, faCircleRadiation } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <Navbar className="mx-5">
        <FontAwesomeIcon icon={faCircleRadiation} size="2x" />

        <Nav className="me-auto">
          <NavItem className="d-flex align-items-center ms-3">
            <span className="font-weight-bold">Energizers</span>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/about">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/sample">
              View Sample
            </NavLink>
          </NavItem>
        </Nav>

        <NavbarText className="text-end">SYN100</NavbarText>
      </Navbar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sample" element={<ViewSample />} />
      </Routes>
    </>
  );
}

export default App;
