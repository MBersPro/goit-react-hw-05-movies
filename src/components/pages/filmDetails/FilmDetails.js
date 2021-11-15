import React, { Suspense, useEffect, useState, lazy } from "react";
import { detailedInfo } from "../../../utils/Api";
import {
  Route,
  Switch,
  useLocation,
  useParams,
  useHistory,
} from "react-router";
import { NavLink } from "react-router-dom";

const FilmDetails = () => {
  const Cast = lazy(() => import("./cast/Cast"));
  const Rewiew = lazy(() => import("./rewiew/Rewiew"));
  const location = useLocation();
  const [film, setFilm] = useState(null);
  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    detailedInfo(id).then((response) => setFilm(response));
  }, []);

  console.log(location)


  const onGoBack = () => {
    history.push(location.state.from);
  };

  if (film === null) return <></>;
  return (
    <>
      <button type="button" onClick={onGoBack}>
        Go Back
      </button>
      <div>
        <img
          src={"https://image.tmdb.org/t/p/w500" + film.poster_path}
          alt="some"
        />
        <div>
          <div>
            <h1>{film.original_title}</h1>
            <p>
              User Score: <span>{film.vote_average}</span>
            </p>
          </div>

          <div>
            <h2>Overview</h2>
            <p>{film.overview}</p>
          </div>
        </div>
        <div>
          <h3>Genres</h3>
          <ul>
            {film.genres &&
              film.genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
          </ul>
        </div>
      </div>
      <div>
        <h2>Additional Information</h2>
        <ul>
          <li>
            <NavLink
              to={{
                pathname: `/movies/${id}/cast`,
                state: { from: location.state.from },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `/movies/${id}/rewiew`,
                state: { from: location.state.from },
              }}
            >
              Rewiew
            </NavLink>
          </li>
        </ul>
      </div>
      {id && (
        <Switch>
          <Route path="/movies/:filmId/cast">
            <Cast id={id} />
          </Route>
          <Route path="/movies/:filmId/rewiew">
            <Rewiew id={id} />
          </Route>
        </Switch>
      )}
    </>
  );
};

export default FilmDetails;
