import Nav from "react-bootstrap/Nav";
import { Navbar, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import notUser from "../../assets/images/icon-not-user.png";
import { navigateToRoutes } from "./utils/navigateToRoutes";
import { navigateUniqueUser } from "../utils/navigateUniqueUser";
import navLinks from "./utils/navlinks";

export const NavbarRick = (props) => {
  const navigate = useNavigate();
  let id = props?.oneUser?.id;
  const image =
    props.oneUser?.image === undefined ? notUser : props.oneUser?.image;

  return (
    <Navbar expand="sm" className="bg-body-tertiary w-100 position-navbar">
      <Container>
        <Navbar.Brand>
          <img
            onClick={() => navigateUniqueUser(id, navigate)}
            className="image-navbar"
            src={image}
            alt="imagen de usuario"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="container-links-navbar"
          id="basic-navbar-nav"
        >
           <Nav className="me-auto">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.state}
                bsPrefix={
                  props.stateUsers === link.state ? "color-link" : "link-hover"
                }
                onClick={() => navigateToRoutes(link.state, navigate, props)}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
