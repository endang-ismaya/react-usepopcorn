import { useState } from "react";
import Navbar from "./components/Navbar";
import db from "./db/db";
import Main from "./components/Main";

export default function App() {
  const [movies, setMovies] = useState(db.movies);

  return (
    <>
      <Navbar movies={movies} />
      <Main movies={movies} />
    </>
  );
}
