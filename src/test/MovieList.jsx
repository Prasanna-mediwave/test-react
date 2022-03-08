import React from "react";

export default function MovieList({ movie, onDelete }) {
  return (
    <div>
      {movie.map((list) => (
        <div className="list-preview" key={list.id}>
          <h2>{list.mName}</h2>
          <h3>{list.year}</h3>
          {/* <button onClick={() => onDelete(list.id)}>Delete</button> */}
        </div>
      ))}
    </div>
  );
}
