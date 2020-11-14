import React, { useState, useContext, useEffect } from "react";
import AppContext from "../../store/context";

function MovieDetails(props) {
    const { state } = useContext(AppContext);

    console.log("staaattteee from moviedetails", state.ticket)
    return (
        <div>
            
        </div>
    );
}

export default MovieDetails;