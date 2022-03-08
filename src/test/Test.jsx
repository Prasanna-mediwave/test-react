import { useState } from "react";
import MovieList from "./MovieList";
import useFetch from "./useFetch";

export default function Test() {
  const [name, setName] = useState("Rajesh");
  const [age, setAge] = useState(27);
  // const [movie, setMovie] = useState(null);
  // const [inLloading, setinLoading] = useState(true);
  // const [error, setError] = useState(null);
  const handleClick = () => {
    setName("Prasanna");
    setAge(26);
  };

  const {
    data: movie,
    inLoading,
    error,
  } = useFetch("http://localhost:8000/lists");
  // useEffect(() => {
  //   setTimeout(() => {
  //     /* to Fetch data from server 1*/
  //     fetch("http://localhost:8000/lists")
  //       .then((res) => {
  //         /* if problem in server 3 */
  //         if (!res.ok) {
  //           throw Error("could not fetch the data for that resource");
  //         }
  //         return res.json();
  //       })
  //       .then((li) => {
  //         setMovie(li);
  //         setinLoading(false);
  //         setError(null);
  //       })
  //       /* catch error message when server is not connected 2*/
  //       .catch((err) => {
  //         setinLoading(false);
  //         setError(err.message);
  //       });
  //   }, 1000);
  // }, []);

  // const handleDelete = (id) => {
  //   const btnDelete = movie.filter((list) => list.id !== id);
  //   setMovie(btnDelete);
  // };

  return (
    <div>
      <div>useState</div>
      <div>
        <p>
          I'm {name} and my {age} years old
        </p>
        <button onClick={handleClick}>Clicked</button>
      </div>
      <div>
        {error && <div>{error}</div>}
        {inLoading && <div>loading...</div>}
        {movie && <MovieList movie={movie} />}
      </div>
    </div>
  );
}
