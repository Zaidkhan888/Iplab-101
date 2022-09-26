import React from "react";
import {Link } from "react-router-dom"
import Page3 from "./Page3";

function Page2(){
    return (
        <div className="page2">
            <h1>Hello World this is Page-2</h1>
            <ul>
                <li> <Link to ="Page3">Page-3</Link></li>
            </ul>

        </div>


    );
}


export default Page2 ;