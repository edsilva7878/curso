import { Route, BrowserRouter } from "react-router-dom";

import Index from "./index";
import About from "./about";
import Project from "./project";
import AboutPlan from "./aboutPlan";
import AboutExecution from "./aboutExecution";
import AboutControll from "./aboutControll";
import AboutPresentation from "./aboutPresentation";
import AboutInitiation from "./aboutInitiation";
import Contact from "./contact";

export default function Routes(){
   return(
       <BrowserRouter>
           <Route component = { Index }  path="/" exact />
           <Route component = { About }  path="/about" />
           <Route component = { Project }  path="/project" />
           <Route component = { AboutPlan }  path="/aboutPlan" />
           <Route component = { AboutExecution }  path="/aboutexecution" />
           <Route component = { AboutControll }  path="/aboutcontroll" />
           <Route component = { AboutPresentation }  path="/aboutpresentation" />
           <Route component = { AboutInitiation }  path="/aboutinitiation" />
           <Route component = { Contact }  path="/contact" />
       </BrowserRouter>
   )
}

