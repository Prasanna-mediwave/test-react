import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Created() {
  const [movieName, setMoviename] = useState("");
  const [movieYear, setMovieyear] = useState("");
  const [inLoading, setInloading] = useState(false);
  const navigate = useNavigate();

  const handleSubmite = (e) => {
    e.preventDefault();
    const addMovie = { mName: movieName, year: movieYear };
    setInloading(true);
    /*port r add req to server to another page*/
    fetch("http://localhost:8000/lists", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addMovie),
    }).then((e) => {
      setInloading(false);
      navigate("/");
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmite}>
        <div>
          <label htmlFor="movieName">Color</label>
          <input
            type="text"
            id="movieName"
            value={movieName}
            onChange={(e) => setMoviename(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <input
            type="text"
            id="year"
            value={movieYear}
            onChange={(e) => setMovieyear(e.target.value)}
          />
        </div>
        {!inLoading && <button>Add movie</button>}
        {inLoading && <button>Loading...</button>}
      </form>
      <p>{movieName}</p>
      <p>{movieYear}</p>
    </div>
  );
}
