import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { apiTrends } from "../../../utils/Api";
import { activeNavLink } from "./HomePage.module.css"
import { useLocation } from "react-router";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation()

  useEffect(() => {
    apiTrends().then((response) => setFilms([...response]));
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <div>
        <ul>
          {films.map(({ id, title }) => (
            <li>
              <NavLink
                activeClassName={activeNavLink}
                to={{
                  pathname: `/movies/${id}`,
                  state: {from: location}
                }}
              >
                <p>{title}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
