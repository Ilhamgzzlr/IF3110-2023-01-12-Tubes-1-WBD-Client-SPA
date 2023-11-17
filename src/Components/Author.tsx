// import React from "react";
import '../Css/Author.css';
import tulus from '../Images/tulus.jpg';
import axios from 'axios';
import { useEffect, useState } from 'react';



const Author = () => {
    const [songs, setsongs] = useState<{ id_song: number; title: string ; artist: string; album: string; date: string; duration: string}[]>([]);
    useEffect(() => {
        axios.get('http://localhost:8000/songs')
        .then((response) => {
            setsongs(response.data);
        })
        .catch((error) => {
            console.error('Error fetching songs:', error);
        });
    }, []);
    return (
        <div>
            <div className="main">
                <div className="Songs">
                    <div className="h4">
                        <h4>Songs</h4>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </div>
                <div className="listSongs">
                    <div className="header">
                        <h5>#</h5>
                        <h5 className="title">Title</h5>
                        <h5>Album</h5>
                        <h5>Date</h5>
                        <h5>Duration</h5>
                    </div>
                    {songs.map((song) => (
                        <div className="container_song">
                            <div className="Song" id="songList">
                                <a className="items" key={song.id_song}>
                                    <div className="wrap">
                                        <h5 className="no">1.</h5>
                                            <img src={tulus} alt="" />
                                        <h5>
                                            <div className="judulLagu">
                                                {song.title}
                                            </div>
                                            <div className="subLagu">
                                                {song.artist}
                                            </div>
                                        </h5>
                                        <h5 className="album_song">
                                            {song.album}
                                        </h5>
                                        <h5 className="date">
                                            {song.date}
                                        </h5>
                                        <h5 className="duration">
                                            {song.duration}
                                        </h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Author;