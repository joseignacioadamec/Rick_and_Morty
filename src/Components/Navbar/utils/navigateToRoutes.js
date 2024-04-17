// export const navigateToRoutes = (option, navigate, props) => {
//   if (option === "all") {
//     navigate("/allUsers");
//     props.handleChangeStateUsersAll();
//   }

//   if (option === "alive") {
//     navigate("/usersAlive");
//     props.handleChangeStateUsersAlive();
//   }

//   if (option === "dead") {
//     navigate("/usersDead");
//     props.handleChangeStateUsersDead();
//   }

//   if (option === "unknown") {
//     navigate("/usersUnknown");
//     props.handleChangeStateUsersUnknown();
//   }
// };

export const navigateToRoutes = (option, navigate, props) => {
  const routeMappings = {
    all: { path: "/allUsers", handler: props.handleChangeStateUsersAll },
    alive: { path: "/usersAlive", handler: props.handleChangeStateUsersAlive },
    dead: { path: "/usersDead", handler: props.handleChangeStateUsersDead },
    unknown: {
      path: "/usersUnknown",
      handler: props.handleChangeStateUsersUnknown,
    },
    // Otras opciones predeterminadas pueden agregarse aquí
  };

  const { path, handler } = routeMappings[option] || {};
  // Ejecutar directamente sin verificación de existencia
  navigate(path);
  handler && handler();
};
