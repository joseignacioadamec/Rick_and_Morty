import { Navigate, Route, Routes } from "react-router-dom";
import { UniqueUser } from "../Components/UniqueUser.jsx";
import { Container } from "react-bootstrap";
import { NavbarRick } from "../Components/Navbar/NavbarRick.jsx";
import { AllUsers } from "../Components/AllUsers.jsx";

export const AllRoutes = ({
  oneUser,
  setOneUser,
  state,
  stateUsers,
  handleChangeStateUsersAll,
  handleChangeStateUsersAlive,
  handleChangeStateUsersDead,
  handleChangeStateUsersUnknown,
  next,
}) => {
  const commonProps = {
    state,
    next,
    handleChangeStateUsersAll,
    handleChangeStateUsersAlive,
    handleChangeStateUsersDead,
    handleChangeStateUsersUnknown,
  };

  return (
    <Container
      fluid
      className="custom-container"
    >
      <>
        <NavbarRick
          oneUser={oneUser}
          stateUsers={stateUsers}
          handleChangeStateUsersAll={handleChangeStateUsersAll}
          handleChangeStateUsersAlive={handleChangeStateUsersAlive}
          handleChangeStateUsersDead={handleChangeStateUsersDead}
          handleChangeStateUsersUnknown={handleChangeStateUsersUnknown}
        />
        <Routes>
          <Route path="/" element={<Navigate to="/allUsers" />} />
          {["/*", "/usersAlive", "/usersDead", "/usersUnknown"].map((path) => (
            <Route
              key={path}
              exact
              path={path}
              element={<AllUsers {...commonProps} />}
            />
          ))}
          <Route
            exact
            path="/uniqueUser/:id"
            element={
              <UniqueUser
                stateUsers={stateUsers}
                oneUser={oneUser}
                setOneUser={setOneUser}
              />
            }
          />
        </Routes>
      </>
    </Container>
  );
};
