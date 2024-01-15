import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { changeItemPerPage } from "./utils/changeItemPerPage";
import { handleChangeUsers } from "./utils/handleChangeUsers";
import { changeUserId } from "./utils/changeUserId";

export const AllUsers = ({ state, next }) => {
  const navigate = useNavigate();
  const nextUsersRef = useRef(null);
  const [lastImageLoaded, setLastImageLoaded] = useState(null);
  const itemPerPage = changeItemPerPage(state);
  const users = handleChangeUsers(state);

  useEffect(() => {
    if (lastImageLoaded && nextUsersRef.current) {
      nextUsersRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [lastImageLoaded]);

  useEffect(() => {
    const handleImageLoad = () => {
      setLastImageLoaded(true);
    };

    setLastImageLoaded(null);

    users?.slice(0, itemPerPage).forEach((user, index) => {
      const img = new Image();
      img.src = user.image;
      if (index === itemPerPage - 1) {
        img.addEventListener("load", handleImageLoad);
      }
    });

    return () => {
      setLastImageLoaded(null);
    };
  }, [users, itemPerPage]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };
  return (
    <>
      <Row>
        <Col>
          <div>
            <Button
              className="button-down"
              variant="primary"
              onClick={scrollToBottom}
            >
              DOWN
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="container-custom-all-users">
        {users?.slice(0, itemPerPage).map((user) => (
          <Col
            xs={12}
            sm={6}
            md={3}
            lg={3}
            xl={3}
            className="custom-all-users"
            key={user.id}
          >
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={() => changeUserId(user.id, navigate)}
            >
              <Card className="">
                <div
                  className={
                    user.status === "Alive"
                      ? "custom-users alive-user-hover"
                      : user.status === "Dead"
                      ? "custom-users dead-user-hover"
                      : user.status === "unknown"
                      ? "custom-users unknown-user-hover"
                      : null
                  }
                >
                  <img className="users-img" src={user.image} alt="imagenes" />
                  <p className="name-users">{user.name}</p>
                </div>
                <div className="text-center">
                  <p
                    className={
                      user.status === "Alive"
                        ? "status-user-alive"
                        : user.status === "Dead"
                        ? "status-user-dead"
                        : user.status === "unknown"
                        ? "status-user-unknown"
                        : null
                    }
                  >
                    {user.status}
                    {/* {user.id} */}
                  </p>
                  <p className="species-users">{user.species}</p>
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <Row className="mb-1" ref={nextUsersRef}>
        <Col>
          <Button className="button-next" onClick={next}>
            NEXT
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <Button
              className="button-up"
              variant="primary"
              onClick={scrollToTop}
            >
              UP
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};
