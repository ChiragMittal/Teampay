import React,{useState} from "react";

function SingleSuggestions({item}){
    return(
        <div class="card">
            <div class="container">
                <p>{item}</p>
            </div>
        </div>
    )

}


export default SingleSuggestions;