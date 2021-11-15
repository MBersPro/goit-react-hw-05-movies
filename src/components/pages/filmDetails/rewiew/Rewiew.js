import React, { useEffect, useState } from "react";
import { rewiewApi } from "../../../../utils/Api";

const Rewiew = ({ id }) => {
  const [rewiew, setRewiew] = useState([]);
  useEffect(() => {
    rewiewApi(id).then((response) => setRewiew(response.data.results));
  }, []);
  console.log(rewiew);
  return (
    <>
      <div>
        {rewiew && rewiew.map((rew) => (
          <div>
            <p>
              Author: <span>{rew.author}</span>
            </p>
            <p>{rew.content}</p>
          </div>
        ))}
        {!rewiew.length && <h1>Not Found</h1>}
      </div>
    </>
  );
};

export default Rewiew;
