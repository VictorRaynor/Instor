import { useState, useEffect } from "react";

const Search = ({ setCategoryName, setQueryKey }) => {
  const [input, setInput] = useState();
  const [inputName, setInputName] = useState();

  const handeInput = (e) => {
    setInput(e.target.value);
    setInputName(e.target.name);
  };

  useEffect(() => {
    setCategoryName(input);
    setQueryKey(inputName);
  }, [input]);

  return (
    <>
      <input
        onChange={handeInput}
        type="text"
        placeholder="Suche nach einem Title"
        name="title"
      />
      <input
        onChange={handeInput}
        type="text"
        placeholder="Suche nach einem Raum"
        name="room"
      />
      <input
        onChange={handeInput}
        type="text"
        placeholder="Suche nach einer Größe"
        name="size"
      />
    </>
  );
};

export default Search;
