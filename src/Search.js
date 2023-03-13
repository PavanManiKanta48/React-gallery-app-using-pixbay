import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = ({ match }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=33257720-8852cba7e3e3427839e3c749f&q=${match.params.image}&image_type=photo`
      )
      .then((res) => setData(res.data.hits));
  }, []);
  return (
    <div className="search">
      <div className="row">
        {data &&
          data.map((imgObj) => (
            <div className="card">
              <img src={imgObj.largeImageURL} height="250px" width="250px" />
              <div className="cad-body">
                <h5 className="card-title">{imgObj.tags}</h5>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
