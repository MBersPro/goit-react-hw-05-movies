import React, { useState, useEffect } from "react";
import { apiSearch } from "../../../utils/Api";
import QueryFilms from "./queryFilms/QueryFilms";
import { useHistory, useLocation } from "react-router";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [films, setFilms] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const search = location.search.slice(7);

  useEffect(() => {
    location.search && apiSearch(search).then((response) => setFilms(response));
  }, []);

  const onInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const onSubmit = (e) => {
    if (query === "") {
      alert("Please write the film name, which you want to find.");
    }
    e.preventDefault();
    setQuery();
    apiSearch(query).then((response) => setFilms(response));
    history.push({
      ...location,
      search: `query=${query}`,
    });
    setQuery("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <button>SEARCH</button>
        <input type="text" value={query} onChange={onInputChange} />
      </form>
      <QueryFilms films={films} />
    </>
  );
};

export default MoviesPage;
