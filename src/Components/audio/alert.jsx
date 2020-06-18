import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import audiofile from './Zen_mg_SHIBUYA_long.m4r';

//Play alert sound when a countdown reaches 0
function Alert ({work_countdown, break_countdown}){

    const alertaudio = useRef(null)

    useEffect(() => {
        
        if(break_countdown){
            //console.log("playing alert sound");
            //console.log("break countdown", break_countdown);
            alertaudio.current.play();
        }
        else if (!alertaudio.current.paused && !break_countdown){
            //console.log("pausing alert sound");
            //console.log("break countdown", break_countdown);
            alertaudio.current.pause();
        }
    },[work_countdown, break_countdown])


    return(
        <audio ref={alertaudio} src = {audiofile} type = "audio/mp4"></audio>
    )
}
const mapStateToProps = state =>({
    work_countdown : state.countdown.work_countdown,
    break_countdown : state.countdown.break_countdown,
})
export default connect(mapStateToProps)(Alert);
