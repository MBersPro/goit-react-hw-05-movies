import React, { useEffect, useState } from "react";
import { castApi } from "../../../../utils/Api";
import PropTypes from "prop-types";

const Cast = ({ id }) => {
  const [actors, setActors] = useState([]);
  console.log(id);
  useEffect(() => {
    castApi(id).then((response) => setActors(response.data.cast));
  }, []);
  console.log(actors);
  return (
    <>
      <div>
        {actors &&
          actors.map((actor) => (
            <div>
              <img
                src={"https://image.tmdb.org/t/p/w500" + actor.profile_path}
                alt={actor.name}
              />
              <p>{actor.original_name}</p>
              <p>
                Character: <span>{actor.character}</span>
              </p>
            </div>
          ))}
      </div>
    </>
  );
};

Cast.propTypes = {
  id: PropTypes.string.isRequired
}

export default Cast;
