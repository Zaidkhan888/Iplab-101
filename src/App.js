import logo from './logo.svg';
import './App.css';
// import {BrowserRouter as Router , Link , Route , Switch};
import {BrowserRouter , Routes , Route } from "react-router-dom";
import Page1 from "./component/Page1";
import Page2 from "./component/Page2";
import Page3  from "./component/Page3";
import {Link} from "react-router-dom";
import Usestate from "./component/Usestate"



function App(){
  return(
    <>
    
    <BrowserRouter>
      <Routes>
        {/* <Route exact path ="/" element ={ }/>  */}
        {/* <Route exact path ="Page1" element ={ <Page 1></Route>}  */}
        <Route exact path ="/" element ={ <Page1 />} /> 
        <Route exact path ="Page2" element ={ <Page2 />}/> 
        <Route exact path ="Page2/Page3" element ={ <Page3 />}/> 
        {/* </Route> */}
       


      </Routes>
      {/* <div className="links">
      <ul>
        <li><Link to ="Page1">Page-1</Link></li>
      </ul>
    </div> */}
    




    </BrowserRouter>
    <Usestate />
   
    </>

  );
}




export default App;
