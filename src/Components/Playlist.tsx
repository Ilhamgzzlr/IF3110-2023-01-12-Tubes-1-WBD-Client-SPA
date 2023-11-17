// import React from "react";
import axios from 'axios';
import '../Css/Playlist.css'
import tulus from '../Images/tulus.jpg'
import { useEffect, useState } from 'react';

const Playlist = () => {

    const [playlists, setPlaylists] = useState<{ id_playlist: number; name: string; artist: string }[]>([]);
    useEffect(() => {
        axios.get('http://localhost:8000/playlists')
        .then((response) => {
            setPlaylists(response.data);
        })
        .catch((error) => {
            console.error('Error fetching playlists:', error);
        });
    }, []);

    return (
        <div className="main">
            <div className="Songs">
                <div className="h4">
                    <h4>Playlist</h4>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </div>
            <div className="listPlaylist">
            {playlists.map((playlist) => (
                <div className="Playlist" id="songList">
                        <a className="item_playlist" key={playlist.id_playlist}>
                            <img src={tulus} alt="" />
                            <div className="wrap">
                                <h5>
                                    <div className="judulPlaylist">
                                    {playlist.name}
                                    </div>
                                    <div className="subPlaylist">
                                    {playlist.artist}
                                    </div>
                                </h5>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                                </svg>
                            </div>
                        </a>
                    
                </div> 
                ))} 
            </div>
        </div>
    );
}

export default Playlist;