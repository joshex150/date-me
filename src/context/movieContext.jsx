import { createContext, useState, useEffect, useMemo } from "react";

export const movieContext = createContext({
  movie: [],
  loading: false,
});

export const MovieContextProvider = ({ children }) => {
  const [movie, setMovie] = useState([]); // Initialize movie as null
  const [loading, setLoading] = useState(false); // Initialize movie as null

  const fetchMovie = async () => {
    const apiUrl =
      "https://max-api.fusionintel.io/api/v1/Showtimes/get-film-showtimes?todayDate=23+Dec+2023+12%3A00+AM&cinemaId=kad-65087c1a";

    const headers = {
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "en-GB,en;q=0.9",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQ2luZW1hQXBpIiwiQ2luZW1hSWQiOiJrYWQtNjUwODdjMWEiLCJuYmYiOjE2OTgxMDY3OTgsImV4cCI6MTcyOTcyOTE5OCwiaWF0IjoxNjk4MTA2Nzk4LCJpc3MiOiJodHRwczovL2Z1c2lvbmludGVsLmlvIiwiYXVkIjoiVXNlciJ9.7jE0ftWCm7HYAB62b8LNjVJfHh66H44o2kAWR1InvU8",
      Connection: "keep-alive",
      Host: "max-api.fusionintel.io",
      Origin: "https://web.kadacinemas.com",
      Referer: "https://web.kadacinemas.com/",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "cross-site",
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15",
    };

    fetch(apiUrl, {
      method: "GET",
      headers: headers,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not OK.");
        }
      })
      .then((data) => {
        setMovie(data.data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  useEffect(() => {
    fetchMovie(); // Fetch movie data when the component mounts
  }, []);

  const contextValue = useMemo(
    () => ({
      movie: movie,
      loading: loading,
    }),
    [movie]
  );

  return (
    <movieContext.Provider value={contextValue}>
      {children}
    </movieContext.Provider>
  );
};
