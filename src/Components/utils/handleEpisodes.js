export const handleEpisodes = async (episodesUrls, setNameEpisodes) => {
  try {
    const episodesData = await Promise.all(
      episodesUrls.map(async (elem) => {
        const res = await fetch(elem);
        return res.json();
      })
    );

    const episodeNames = episodesData?.map((episode) => episode.name);
    setNameEpisodes(episodeNames);
  } catch (error) {
    console.error("Error fetching episodes data:", error);
  }
};
