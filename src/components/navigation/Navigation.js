import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  header,
  ul,
  li,
  navLinks,
  activeNavLinks,
} from "./Navigation.module.css";

const Navigation = ({ routes}) => {
  const location = useLocation()
  return (
    <header className={header}>
      <nav>
        <ul className={ul}>
          {routes.map(({ path, name }) => (
            <li className={li} key={path}>
              <NavLink
                to={{
                  pathname: path,
                  state: {
                    from: location.pathname
                  },
                }}
                className={navLinks}
                activeClassName={activeNavLinks}
                exact
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
