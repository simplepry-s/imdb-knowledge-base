import React, { useState, useEffect } from "react";
import { Header, Movie, Loading } from "../components";
import axios from "axios";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=captain&apikey=bd96c767";

const Home = props => {
  const { location } = props;
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchData = async () => {
    try {
      const result = await axios(MOVIE_API_URL);
      setMovies(result.data.Search);
      setLoading(false);
    } catch (error) {
      setErrorMessage(error.toString());
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const search = async searchValue => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const result = await axios(
        `https://www.omdbapi.com/?s=${searchValue}&apikey=bd96c767`
      );
      if (result.data.Error) {
        setErrorMessage(result.data.Error);
      }
      setMovies(result.data.Search);
      setLoading(false);
    } catch (error) {
      setErrorMessage(error.toString());
      setLoading(false);
    }
  };

  const showMovie = movies => {
    return movies.map((movie, index) => (
      <Movie key={`${index}-${movie.Title}`} movie={movie} />
    ));
  };

  return (
    <div className="App">
      <Header location={location} search={search} text="iMDb Knowledge Base" />
      <div className="movies">
        {loading && !errorMessage ? (
          <Loading type="bars" color="#999999" height={667} width={375} />
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          showMovie(movies)
        )}
      </div>
    </div>
  );
};

export default Home;
