import React from "react";
import PropTypes from "prop-types"

import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
const QueryFilms = ({ films }) => {
  const location = useLocation()
  return (
    <ul>
      {films.map(({ id, title }) => (
        <li key={id}>
          <NavLink
            to={{
              pathname: `/movies/${id}`,
              state: {from: location},
            }}
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

QueryFilms.propTypes = {
  films: PropTypes.object.isRequired
}

export default QueryFilms;
