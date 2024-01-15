export const changeUserId = (id, navigate) => {
  setTimeout(() => {
    navigate(`/uniqueUser/${id}`);
  }, 0);
};
