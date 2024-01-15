export const fetchDataUnknownUsers = async (countUnknownUsers) => {
  try {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${countUnknownUsers}&status=unknown`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
