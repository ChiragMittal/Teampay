import React,{useState} from "react";
import SingleSuggestions from './SingleSuggestions'

function Suggestions ({data}) {
    return(
        <div>
            {data.map((item)=> <SingleSuggestions item={item} /> )}
        </div>
    )

}


export default Suggestions;