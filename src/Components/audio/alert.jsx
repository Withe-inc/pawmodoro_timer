import React, {useEffect, useRef } from 'react';
import {connect} from 'react-redux';
import {INTERMEDIATE} from '../timer/timerDucks';
import audiofile from './Zen_mg_SHIBUYA_long.m4r';

//Play alert sound when a countdown reaches 0
function Alert ({countdown_state}){

    const alertaudio = useRef(null)

    useEffect(() => {
        console.log("countdown state", countdown_state);

        if(countdown_state === INTERMEDIATE){
            console.log("playing alert sound");
            alertaudio.current.play();
        }
        else {
            console.log("pausing alert sound");
            alertaudio.current.pause();
        }
    }, [countdown_state])


    return(
        <audio loop ref={alertaudio} src = {audiofile} type = "audio/mp4"></audio>
    )
}

const mapStateToProps = state =>({
    countdown_state : state.countdown.countdown_state,
})

export default connect(mapStateToProps)(Alert);
