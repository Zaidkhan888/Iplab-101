import React from "react";
import {Link} from "react-router-dom";
import Page2 from "./Page2"

function Page1(){
    return (
        <div className="page1">
            <h1>Hello World this is Page-1</h1>
            <ul>
                <li> <Link to ="Page2">Page2</Link></li>
            </ul>
        </div>


    );
}
export default Page1 ;