import Nav from "react-bootstrap/Nav";
import { Navbar, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import notUser from "../../assets/images/icon-not-user.png";
import { navigateToRoutes } from "./utils/navigateToRoutes";
import { navigateUniqueUser } from "../utils/navigateUniqueUser";

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
            <Nav.Link
              bsPrefix={
                props.stateUsers === "all" ? "color-link" : "link-hover"
              }
              onClick={() => navigateToRoutes("all", navigate, props)}
            >
              ALL
            </Nav.Link>
            <Nav.Link
              bsPrefix={
                props.stateUsers === "alive" ? "color-link" : "link-hover"
              }
              onClick={() => navigateToRoutes("alive", navigate, props)}
            >
              ALIVE
            </Nav.Link>
            <Nav.Link
              bsPrefix={
                props.stateUsers === "dead" ? "color-link" : "link-hover"
              }
              onClick={() => navigateToRoutes("dead", navigate, props)}
            >
              DEAD
            </Nav.Link>
            <Nav.Link
              bsPrefix={
                props.stateUsers === "unknown" ? "color-link" : "link-hover"
              }
              onClick={() => navigateToRoutes("unknown", navigate, props)}
            >
              UNKNOWN
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
