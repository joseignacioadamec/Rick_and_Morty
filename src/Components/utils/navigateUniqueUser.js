export const navigateUniqueUser = (id, navigate) => {
  if (id) {
    setTimeout(() => {
      navigate(`/uniqueUser/${id}`);
    }, 0);
  }
};
