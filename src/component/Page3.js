import React from "react";
import {Link} from "react-router-dom"


function Page3(){
    return (
        <div className="page3">
            <h1>Hello World this is Page-3</h1>
            <ul>
            <li><Link to ="page1">Page1</Link></li>
            </ul>
        </div>


    );
}
export default Page3 ;