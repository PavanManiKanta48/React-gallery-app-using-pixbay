import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  let history = useHistory();
  const [image, setImage] = useState("");
  return (
    <div className="bgimage">
      <div>
        <h3 className="brandname">Pixabay</h3>
        <div className="topright">
          <button className="btn">Login</button>&nbsp;
          <button className="btn">Signup</button>&nbsp;
        </div>
      </div>
      <div className="hero">
        <h1>Stunning free images & royalty free stock</h1>
        <h2>
          Over 2.7 million+ high quality stock images, videos and music shared
          by our talented community
        </h2>
        <input
          type="text"
          size="80"
          onChange={(e) => setImage(e.target.value)}
        />
        <br></br>
        <button onClick={() => image && history.push(`/search/${image}`)}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Home;
