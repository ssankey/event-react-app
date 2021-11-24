import React from 'react'
import Axios from "axios"
import { useState,useEffect } from "react"
import EventItems from './EventItems'


export default function Menu() {
    const [event, setevent] = useState([])
    const [dat, setdat] = useState([])
    const [state, setstate] = useState('')
    var elements = document.getElementsByClassName("column");
    var i;
    var url = 'https://allevents.s3.amazonaws.com/tests/categories.json'
    useEffect(() => {
        async function getEvents() {
            var results = await Axios.get(url);
            setevent(results.data)
            let eventName = await Axios.get(results.data)
            // console.log(results.data)
        }
        getEvents();

    }, []);


    useEffect(() => {
        console.log(dat)
    }, [dat])


    async function sendData(e) {
        const result = event.filter((eve) => eve.category === e.target.value)
        var rest = await Axios.get(result[0].data)
        setdat(rest.data.item)
        // console.log(dat)
        // console.log(rest.data.item)
    }

    // function listView() {
    //     for (i = 0; i < elements.length; i++) {
    //     //   elements[i].style.backgroundColor='black'  
    //       elements[i].style.width = "100%";
    //     }
    //   }
      
    //   // Grid View
    //   function gridView() {
    //     for (i = 0; i < elements.length; i++) {
    //       elements[i].style.width = "50%";
    //     //   elements[i].style.cssFloat = "left";
    //     }
    //   }


    return (
        <div>
            {/* <div id="btnContainer">
                <button className="btn " onClick={listView()}><i className="fa fa-bars"></i> List</button>
                <button className="btn active" onClick={gridView()}><i className="fa fa-th-large"></i> Grid</button>
            </div> */}
            <select onChange={sendData} className="drop">
                {event.map((eve) => <option>{eve.category}</option>)}
            </select>
            <EventItems uevent={dat} />
        </div>
    )
}
