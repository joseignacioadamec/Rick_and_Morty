export const fetchDataUniqueUser = async (setOneUser, setEpisodes, id) => {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await res.json();
    setOneUser(data);
    setEpisodes(data.episode);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
