import React from 'react'
import Axios from "axios"
import { useState,useEffect } from "react"
import EventItems from './EventItems'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Menu() {
    const [event, setevent] = useState([])
    const [dat, setdat] = useState([])
    useEffect(() => {
        var url = 'https://allevents.s3.amazonaws.com/tests/categories.json'
        async function getEvents() {
            var results = await Axios.get(url);
            setevent(results.data)
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
        console.log(dat)
        // console.log(rest.data.item)
    }

    // function listView() {
    //     console.log("list-view")
    //         for (i = 0; i < elements.length; i++) {
    //       elements[i].style.backgroundColor='black';
    //     //   elements[i].style.width='black';
    //     }
    //   }
      
    // //   Grid View
    //   function gridView() {
    //     for (i = 0; i < elements.length; i++) {
    //         elements[i].style.backgroundColor='red';
    //     }
    //   }

    // function toggle(){
    //     for (i = 0; i < elements.length; i++) {
    //          if(document.getElementById("MyId").className === "column")
    //          document.getElementById("MyId").className = "grid";
    //     else
    //          document.getElementById("MyId").className = "column";
    //     }
    // }

    var wrapper = document.getElementById("wrapper");
    function toggle(){
        console.log("hrlllo")
        // wrapper.classList.remove("grid")
        wrapper.classList.toggle("list")
    }
    // wrapper = useRef(null)
    // document.addEventListener("click", function (event) {
    //     if (!event.target.matches(".lis")) return;
    //     event.preventDefault();
    //     wrapper.classList.add("list");
    // });
    // document.addEventListener("click", function (event) {
    //     if (!event.target.matches(".grid")) return;
    //     event.preventDefault();
    //     wrapper.classList.remove("list");
    //   });








    return (
        <div>
            <div className="top">
                <button className="lis" onClick={toggle}><i class="fa fa-list"></i>List/Grid</button>
                <select onChange={sendData} className="drop">
                    {event.map((eve) => <option>{eve.category}</option>)}
                </select>
            </div>
            <EventItems uevent={dat} />
        </div>
    )
}
