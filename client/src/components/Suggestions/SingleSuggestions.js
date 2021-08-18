import React,{useState} from "react";

function SingleSuggestions({item}){
    return(
        <div className="card">
            <div className="container">
                <p>{item}</p>
            </div>
        </div>
    )

}


export default SingleSuggestions;