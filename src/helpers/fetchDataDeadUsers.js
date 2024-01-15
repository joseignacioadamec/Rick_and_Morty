export const fetchDataDeadUsers = async (countDeadUsers) => {
  try {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${countDeadUsers}&status=dead`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
