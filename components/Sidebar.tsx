import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-scroll';


const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-p fixed-top"
        id="sideNav"
      >
        <a
          className="navbar-brand js-scroll-trigger"
          onClick={() => window.scrollTo(0, 0)}
          href="#UP"
        >
          <span className="d-lg-block">
            <img
              className="img-profile rounded-circle "
              src="/Seyedmasoud Hosseini.jpg"
              alt="Seyedmasoud Hosseini"
              
              
            />
          </span>
        </a>
       
        <Navbar bg="transparent" expand="lg" expanded={expanded}>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)}/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <li className="nav-item">
                  <Link
                    href="#about"
                    to="about"
                    activeClass="active"
                    className="nav-link"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setExpanded(false)}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="#education"
                    to="education"
                    activeClass="active"
                    className="nav-link"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setExpanded(false)}
                  >
                    Education
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="#experience"
                    to="experience"
                    activeClass="active"
                    className="nav-link"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setExpanded(false)}
                  >
                    Experience
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="#skills"
                    to="skills"
                    activeClass="active"
                    className="nav-link"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setExpanded(false)}
                  >
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="#pawards"
                    to="pawards"
                    activeClass="active"
                    className="nav-link"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setExpanded(false)}
                  >
                    Publication & Award
                  </Link>
                </li>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
       
      </nav>
    </>
  );
};
export default Sidebar;
