export const fetchDataAliveUsers = async (countAliveUsers) => {
  try {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${countAliveUsers}&status=alive`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
