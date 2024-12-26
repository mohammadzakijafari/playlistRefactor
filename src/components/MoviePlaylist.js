import { useDispatch, useSelector } from "react-redux";
import { createRandomMovie } from "../data";
import { addMovie, removeMovie } from "../store";

function MoviePlaylist() {
    // initializing dispatch
    const dispatch = useDispatch();

    // Get list of movies
    const moviePlaylist = useSelector((state) => {
        return state.movies;
    });

    const handleMovieAdd = (movie) => {
        // Add movie to list of movies
        dispatch(addMovie(movie));
    };
    const handleMovieRemove = (movie) => {
        // Remove movie from list of movies
        dispatch(removeMovie(movie));
    };

    const renderedMovies = moviePlaylist.map((movie) => {
        return (
            <div className="" key = { movie }>
                <li key={movie} className="flex items-center justify-between p-5">
                    {movie}
                    <button
                        onClick={() => handleMovieRemove(movie)}
                        className="px-6 py-3 rounded bg-red-700 text-white"
                    >
                        X
                    </button>
                </li>
                <hr />
            </div>
        );
    });

  return (
    <div className="p-10">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl">Movie Playlist</h3>
        <div className="">
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className="px-6 py-3 rounded bg-blue-700 text-white"
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
