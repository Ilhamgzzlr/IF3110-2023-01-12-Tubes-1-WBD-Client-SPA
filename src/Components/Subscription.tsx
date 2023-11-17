// import React from "react";
import '../Css/Subs.css';
import tulus from '../Images/tulus.jpg'


const Subs = () => {
    return (
        <div className="main">
            <div className="Songs">
                <div className="h4">
                    <h4>Subscribe</h4>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </div>
            <div className="listSubs">
                <div className="Subs" id="songList">
                    <a className="item_Subs" >
                        <img src={tulus} alt="" />
                        <div className="wrapSubs">
                            <h5>
                                <div className="subsTitle">
                                    Evaluasi
                                </div>
                            </h5>
                        </div>
                    </a>
                </div>
                <div className="Subs" id="songList">
                    <a className="item_Subs" >
                        <img src={tulus} alt="" />
                        <div className="wrapSubs">
                            <h5>
                                <div className="subsTitle">
                                    Evaluasi
                                </div>
                            </h5>
                        </div>
                    </a>
                </div>
                <div className="Subs" id="songList">
                    <a className="item_Subs" >
                        <img src={tulus} alt="" />
                        <div className="wrapSubs">
                            <h5>
                                <div className="subsTitle">
                                    Evaluasi
                                </div>
                            </h5>
                        </div>
                    </a>
                </div>
                <div className="Subs" id="songList">
                    <a className="item_Subs" >
                        <img src={tulus} alt="" />
                        <div className="wrapSubs">
                            <h5>
                                <div className="subsTitle">
                                    Evaluasi
                                </div>
                            </h5>
                        </div>
                    </a>
                </div>
                <div className="Subs" id="songList">
                    <a className="item_Subs" >
                        <img src={tulus} alt="" />
                        <div className="wrapSubs">
                            <h5>
                                <div className="subsTitle">
                                    Evaluasi
                                </div>
                            </h5>
                        </div>
                    </a>
                </div>
                
                
                
            </div>
        </div>
    );
}

export default Subs;