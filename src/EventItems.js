import Menu from "./Menu";
import React from 'react'
import { useState,useEffect } from "react";
import Axios from "axios"

export default function EventItems({uevent}) {
    
    return (
        
        <div>
            <div className="row">
            {uevent.map((ent)=><div className="column">
            <div className="imgBx">
            <img src={ent.thumb_url}/>  
            </div>
            <div className="text">  
            <p>Event Name: {ent.eventname} <br/>
            Location: {ent.location}</p>
            </div>    
            </div>)}
            </div>
        </div>
    )
}
