import react from "react";
import Navbar from "./component/Navbar";
import CodeforInterview from './component/CodeforInterview';
import AddUsers from "./component/AddUsers";
import AllUsers from "./component/AllUsers";
import EditUsers from "./component/EditUsers";
import Notfound from "./component/Notfound";
import {BrowserRouter,Route, Switch} from 'react-router-dom';



function App() {
  return (
   <BrowserRouter> 
    <Navbar/>
    <Switch>
    <Route exact path="/" component={CodeforInterview}/>
    <Route exact path="/all" component={AllUsers} />
    <Route exact path="/add" component={AddUsers}/>
    <Route exact path="/edit/:id" component={EditUsers} />
    <Route component={Notfound}/>
    </Switch>
   </BrowserRouter>
  );
}

export default App;
