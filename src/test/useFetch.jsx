import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [inLoading, setinLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortcont = new AbortController();
    setTimeout(() => {
      /* to Fetch data from server 1*/
      fetch(url, { signal: abortcont.signal })
        .then((res) => {
          /* if problem in server 3 */
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((li) => {
          setData(li);
          setinLoading(false);
          setError(null);
        })
        /* catch error message when server is not connected 2*/
        .catch((err) => {
          /* useEffect cleanup function and catch error combined  */
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setinLoading(false);
            setError(err.message);
          }
        });
    }, 1000);
    return () => abortcont.abort();
  }, [url]);
  return { data, inLoading, error };
};
export default useFetch;
