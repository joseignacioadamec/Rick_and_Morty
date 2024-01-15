import Select from "react-select";

export const Episodes = ({ nameEpisodes }) => {
  const options = nameEpisodes?.map((data) => ({ value: data, label: data }));

  return (
    <div className="container-episodes-user">
      <div className="">
        <Select
          className="mt-4"
          aria-label="Default select example"
          options={options}
          placeholder={options[0]?.value}
        />
      </div>
    </div>
  );
};
