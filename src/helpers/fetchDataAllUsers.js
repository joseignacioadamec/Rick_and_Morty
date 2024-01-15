export const fetchDataAllUsers = async (countAllUsers) => {
  try {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${countAllUsers}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
