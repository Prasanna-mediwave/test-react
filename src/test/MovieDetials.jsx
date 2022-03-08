import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

export default function MovieDetials() {
  const { id } = useParams();
  const {
    data: movie,
    inLoading,
    error,
  } = useFetch("http://localhost:8000/lists/" + id);

  return (
    <div>
      MovieDetials{id}
      {inLoading && <div>Loading</div>}
      {error && <div>{error}</div>}
      {movie && (
        <div>
          <div>{movie.mName}</div>
          <div>{movie.year}</div>
        </div>
      )}
    </div>
  );
}
