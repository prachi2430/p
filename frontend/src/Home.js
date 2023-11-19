

import kalank from './images/kalank.jpg'

import newavtr from './images/newavtr.jpg'
import tseries from './images/tseries.png'
import ashish_chhanchlani from './images/ashish_chhanchlani.png'
import carry from './images/carry.png'
import code_with_harry from './images/code_with_harry.jpg'
import narendea_modi from './images/narendea_modi.jpg'
import ishowspeed from './images/ishowspeed.jpg'
import code_help_babar from './images/code_help_babar.jpg'
import {GoHomeFill} from 'react-icons/go'
import {BsFire} from 'react-icons/bs'
import {MdOutlineSubscriptions, MdOutlineWatchLater} from 'react-icons/md'
import {BiSolidVideos, BiHistory} from 'react-icons/bi'
import Header from './Header'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function VideoGrid(props){
    const video = props.video;
    return (
        <div class="thumbnail">
            <div class="video">
                <Link to={`/video?id=${video.videoId}`}>
                    <img class="thumbnail-img" src={video.thumbnail} />
                </Link>
            </div>
            <div class="video-title">
                <div>
                    <img src={newavtr} height={'30px'} width={'30px'}></img>
                </div>
                <div class="video-info">
                    <h4 class="track-title margin-0">{video.title}</h4>
                    <p class="margin-0 smaller-fontsize">T-Series</p>
                    <p class="margin-0 smaller-fontsize">{video.views} views . 4 years ago</p>
                </div>
            </div>
        
        </div>
    );
}

function Home(){
    
    const [videos, setVideos] = useState([]);

    const url = "http://localhost:5500/videos"

    const getVideos = async() => {
        try{
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            setVideos(json.videos);

        }catch(error){
            console.log("Error", error)
        }
    };

    useEffect(() => {
        getVideos();
    }, [])

    return (
        <div>
            <Header />
            <div class="main-section">
                <div class="main-left">
                    <button class="yt-side-button">
                        <GoHomeFill /> <span class="side-button-label">Home</span>
                    </button>
                    <button class="yt-side-button">
                        <BsFire /> <span class="side-button-label">Trending</span>
                    </button>
                    <button class="yt-side-button">
                        <MdOutlineSubscriptions /> <span class="side-button-label">Subscriptions</span>
                    </button>
                    <hr />
                    <button class="yt-side-button">
                        <BiSolidVideos /> <span class="side-button-label">Shorts</span>
                    </button>
                    <button class="yt-side-button">
                        <BiHistory /> <span class="side-button-label">History</span>
                    </button>
                    <button class="yt-side-button">
                        <MdOutlineWatchLater /> <span class="side-button-label">Watch Later</span>
                    </button>
                    <hr />
                    <h6 class="fav">Favourites &gt; </h6>
                    <button class="yt-side-button">
                        <img src={carry} height={'30px'} width={'30px'}></img>
                        <span class="side-channel-label">Carry Minati</span>
                    </button>
                    <button class="yt-side-button">
                        <img src={ashish_chhanchlani} height={'30px'} width={'30px'}></img>

                        <span class="side-channel-label">Ashish_Chhanchlani</span>
                    </button>
                    <button class="yt-side-button">
                        <img src={tseries} height={'30px'} width={'30px'}></img>
                        <span class="side-channel-label">T-Series</span>
                    </button>
                    <button class="yt-side-button">
                        <img src={code_with_harry} height={'30px'} width={'30px'}></img>
                        <span class="side-channel-label">Code With Harry</span>
                    </button>
                    <button class="yt-side-button">
                        <img src={narendea_modi} height={'30px'} width={'30px'}></img>
                        <span class="side-channel-label">Narendra Modi</span>
                    </button>
                    <button class="yt-side-button">
                        <img src={ishowspeed} height={'30px'} width={'30px'}></img>
                        <span class="side-channel-label">IShowSpeed</span>
                    </button>
                    <button class="yt-side-button">
                        <img src={code_help_babar} height={'30px'} width={'30px'}></img>
                        <span class="side-channel-label">Code Help Babar</span>
                    </button>

                </div>
                <div class="main-right">
                    
                        {videos.map((video) => {
                            return <VideoGrid video={video} />
                        })}
                    
                </div>
            </div>

            
        </div>
    )
}

export default Home;