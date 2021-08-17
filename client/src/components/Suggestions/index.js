import React,{useState} from "react";
import SingleSuggestions from './SingleSuggestions'

function Suggestions ({data}) {
    return(
        <div className="together">
            <h1>Here are some suggestions</h1>
            {data.map((item)=> <SingleSuggestions item={item} /> )}
        </div>
    )

}


export default Suggestions;