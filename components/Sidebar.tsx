import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-scroll';

const Sidebar = () => {
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
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="/Seyedmasoud Hosseini.jpg"
              alt="Seyedmasoud Hosseini"
            />
          </span>
        </a>

        <Navbar bg="transparent" expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
