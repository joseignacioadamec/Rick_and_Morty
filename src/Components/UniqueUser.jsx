import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Episodes } from "./Episodes";
import { changePath } from "./utils/changePath";
import { handleEpisodes } from "./utils/handleEpisodes";
import { fetchDataUniqueUser } from "../helpers/fetchDataUniqueUser";

export const UniqueUser = ({ stateUsers, oneUser, setOneUser }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [episodes, setEpisodes] = useState([]);
  const [nameEpisodes, setNameEpisodes] = useState([]);

  useEffect(() => {
    fetchDataUniqueUser(setOneUser, setEpisodes, id);
  }, [id]);

  useEffect(() => {
    if (episodes.length > 0) {
      handleEpisodes(episodes, setNameEpisodes);
    }
  }, [episodes]);

  return (
    <div className="custom-container-user">
      <Row className="row-one-user">
        <Col className="col-one-user p-2">
          <Card className="custom-card">
            <div>
              <img src={oneUser?.image} alt="imagenes" />
            </div>
          </Card>
          <div> {oneUser?.name?.toUpperCase()}</div>
          {<Episodes nameEpisodes={nameEpisodes} />}
          <div className="custom-button">
            <Link onClick={() => changePath(stateUsers, navigate)}>
              <Button className="button-next">BACK</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};
