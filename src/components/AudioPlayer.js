
import * as React from "react";
import './style/style.css';
import { IoMdSkipBackward, IoMdSkipForward, IoMdPlay, IoMdPause, IoIosVolumeHigh } from "react-icons/io";
import { CircularProgressbar } from "react-circular-progressbar";
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import GradientSVG from "./gradientSVG";

const tracks = [
    {
        name: "Mekanın Sahibi",
        artist: "Norm Ender",
        cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
        source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/1.mp3",
        url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
        favorited: false
    },
    {
        name: "Everybody Knows",
        artist: "Leonard Cohen",
        cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/2.jpg",
        source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/2.mp3",
        url: "https://www.youtube.com/watch?v=Lin-a2lTelg",
        favorited: true
    },
    {
        name: "Extreme Ways",
        artist: "Moby",
        cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg",
        source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/3.mp3",
        url: "https://www.youtube.com/watch?v=ICjyAe9S54c",
        favorited: false
    },
    {
        name: "Butterflies",
        artist: "Sia",
        cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg",
        source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/4.mp3",
        url: "https://www.youtube.com/watch?v=kYgGwWYOd9Y",
        favorited: false
    },
    {
        name: "The Final Victory",
        artist: "Haggard",
        cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/5.jpg",
        source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/5.mp3",
        url: "https://www.youtube.com/watch?v=0WlpALnQdN8",
        favorited: true
    },
    {
        name: "Genius ft. Sia, Diplo, Labrinth",
        artist: "LSD",
        cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/6.jpg",
        source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/6.mp3",
        url: "https://www.youtube.com/watch?v=HhoATZ1Imtw",
        favorited: false
    },
    {
        name: "The Comeback Kid",
        artist: "Lindi Ortega",
        cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/7.jpg",
        source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/7.mp3",
        url: "https://www.youtube.com/watch?v=me6aoX0wCV8",
        favorited: true
    },
    {
        name: "Overdose",
        artist: "Grandson",
        cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/8.jpg",
        source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/8.mp3",
        url: "https://www.youtube.com/watch?v=00-Rl3Jlx-o",
        favorited: false
    },
    {
        name: "Rag'n'Bone Man",
        artist: "Human",
        cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
        source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
        url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
        favorited: false
    }]

const player = new Audio(tracks[0].source)
player.setAttribute('preload', 'metadata')
const userOptions = React.createContext({
    shuffle: false,
    repeat: false,
})

function Control(props) {

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '55px' }} >
            <div style={{
                backgroundImage: `url("./assets/images/ControlBackground.png")`, backgroundSize: 'cover'
            }}>
                <div className="controls">
                    <button
                        className="controlButton"
                        onClick={
                            x => props.setIdx(props.idx - 1 < 0 ? 8 : props.idx - 1)
                        }>
                        <IoMdSkipBackward style={{ color: '#888888' }} />
                    </button>
                    {
                        props.playState === true ?
                            <button
                                className="centerButton"
                                onClick={x => props.setPlayState(false)}>
                                <IoMdPause style={{ color: '#888888' }} />
                            </button> :
                            <button
                                className="centerButton"
                                onClick={x => props.setPlayState(true)}>
                                <IoMdPlay style={{ color: '#888888' }} />
                            </button>
                    }
                    <button
                        className="controlButton"
                        onClick={x => props.setIdx((props.idx + 1) % 9)}>
                        <IoMdSkipForward style={{ color: '#888888' }} />
                    </button>
                </div>
            </div>
        </div>
    );
}

function VolumeButton() {
    const idCSS = "hello";
    React.useEffect(() => {
        setKeyRangeBar(false);
        setVolumeState(30)
    }, [])
    const audioRef = React.useRef(player)
    console.log("player", audioRef.current.volume)
    const [volumeState, setVolumeState] = React.useState(audioRef.current.volume * 100)
    const [keyRangeBar, setKeyRangeBar] = React.useState(false)
    const handleChange = (value) => {
        audioRef.current.volume = value / 100;
        setVolumeState(value)
    }
    const showSlider = () => {
        if (keyRangeBar === true) {
            setKeyRangeBar(false)
        } else {
            setKeyRangeBar(true)
        }
    }
    return (
        <div style={{ position: 'relative' }}>
            <div>
                <button onClick={showSlider}
                    className="VolumeButton">
                    <IoIosVolumeHigh style={{ color: '#888888' }} />
                </button>
            </div>
            <div className="svgImageGradient">
                <GradientSVG />
                <CircularProgressbar
                    strokeWidth={8}
                    value={volumeState}
                    counterClockwise={true}
                    styles={{
                        path: { stroke: `url(#${idCSS})`, height: "100%" },
                        trail: {
                            stroke: "#2e2e2e"
                        }
                    }}
                />
            </div>
            {
                keyRangeBar ? <div className="sliderRange">
                    <Slider
                        min={0}
                        max={100}
                        value={volumeState}
                        orientation='vertical'
                        onChange={handleChange}
                    />
                </div> : null
            }

        </div>
    )
}

function Progress(props) {
    let [length, setLength] = React.useState(0)
    let options = React.useContext(userOptions)
    const progressBar = document.querySelector('.progressBar')
    
    function updateProgress(e) {
        console.log('e.clientX', e.clientX)
        let offset = e.target.getBoundingClientRect().left
        let newOffSet = e.clientX
        let newWidth = newOffSet - offset
        progressBar.style.width = newWidth + "px"
        let secPerPx = length / 840
        player.currentTime = secPerPx * newWidth
    }
    
    
    setInterval(() => {
        setLength(Math.ceil(player.duration))
        let secPerPx = Math.ceil(player.duration) / 840
        let newWidth = player.currentTime / secPerPx
        document.querySelector('.progressBar').style.width = newWidth + "px"
        if (player.currentTime === player.duration) {
            if (options.shuffle === true) {
                props.setIdx((parseInt(Math.random() * 1000)) % 9)
            }
            else if (options.repeat === true) {
                player.play()
            }
            else {
                props.setIdx((props.idx + 1) % 9)
            }
        }
    }, 1000);
    return (
        <div className="progress">
            <div
                className="progressCenter"
                onClick={(e) => updateProgress(e)}>
                <div className="progressBar">
                </div>
            </div>
        </div>
    );
}

function Avatar(props) {
    return (
        <>
            <h1 className="title">{tracks[props.idx].name}</h1>
            <h4 className="name">{tracks[props.idx].artist}</h4>
        </>
    );
}

const AudioPlayer = (props) => {
    let [idx, setIdx] = React.useState(0);
    let [playState, setPlayState] = React.useState(false);
    let oldIdx = React.useRef(idx)
    React.useEffect(() => {

        if (playState === true)
            player.play()
        else
            player.pause()
        if (idx !== oldIdx.current) {
            player.pause()
            player.src = tracks[idx].source
            player.load()
            player.play()
            setPlayState(true)
            oldIdx.current = idx
        }

    }, [playState, idx])

    return (
        <div className="playerContaier">
            <Progress
                setIdx={setIdx}
                idx={idx}
            />
            <Avatar idx={idx} />
            <Control
                setIdx={setIdx}
                idx={idx}
                playState={playState}
                setPlayState={setPlayState} />
            <VolumeButton />
        </div>
    );
}
export default AudioPlayer;