import Menu from "./Menu";
import React from 'react'
import { useState,useEffect } from "react";
import Axios from "axios"
import { Card, Container } from "react-bootstrap";

export default function EventItems({uevent}) {
    
    return (
        
        <Container >
            <Card id="wrapper" className="cont">
                {uevent.map((ent) => <div id="MyId" className="items">
                    <div className="imgBx">
                        <img src={ent.thumb_url} />
                    </div>
                    <Card.Body>
                        <div className="text">
                           <strong>Event Name:</strong>  {ent.eventname}<br/>
                           <strong>Location:</strong> {ent.location}<br/>
                            <strong>Timing:</strong> {ent.start_time_display}
                        </div>
            
                    </Card.Body>
                </div>)}
            </Card>
        </Container>
    )
}
