import React from "react";
import { Link } from "react-router-dom";

export default function MovieList({ movie, onDelete }) {
  return (
    <div>
      {movie.map((list) => (
        <div className="list-preview" key={list.id}>
          <Link to={`/movieDetials/${list.id}`}>
            <h2>{list.mName}</h2>
            <h3>{list.year}</h3>
          </Link>
          {/* <button onClick={() => onDelete(list.id)}>Delete</button> */}
        </div>
      ))}
    </div>
  );
}
