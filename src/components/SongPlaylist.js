import { createRandomSong } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../store";

function SongPlaylist() {
    // initializing dispatch
    const dispatch = useDispatch();

    // Get list of songs
    const songPlaylist = useSelector((state) => {
        return state.songs;
    });

    const handleSongAdd = (song) => {
        // Add song to list of songs
        dispatch(addSong(song));
    };
    const handleSongRemove = (song) => {
        // Remove song from list of songs
        dispatch(removeSong(song));
    };

    const renderedSongs = songPlaylist.map((song) => {
        return (
            <div className="" key = { song }>
                <li key={song} className="flex items-center justify-between p-5">
                    {song}
                    <button
                        onClick={() => handleSongRemove(song)}
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
                <h3 className="text-3xl">Song Playlist</h3>
                <div className="px-6 py-3 rounded bg-blue-700 text-white">
                    <button
                        onClick={() => handleSongAdd(createRandomSong())}
                        className="button is-link"
                    >
                        + Add Song to Playlist
                    </button>
                </div>
            </div>
            <ul>{renderedSongs}</ul>
        </div>
    );
}

export default SongPlaylist;
