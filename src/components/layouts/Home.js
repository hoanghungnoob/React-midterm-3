import React from "react"; 
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import User from "../users/User";
import Search from '../users/Search';

const Home = ()=>{
    return(
        <div className="container">
            <Switch>
                <Route exact path="/"  component={Search} />
                <Route exact path="/about"  component={About} />
                <Route exact path="/user/:id"  component={User} />
                <Route exact path="/*"  component={NotFound} />  
            </Switch>
        </div>
    )
}
export default Home;