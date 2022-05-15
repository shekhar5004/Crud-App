import Header from "./component/Header";
import AllUser from "./component/AllUser";
import AddUser from "./component/AddUser";
import EditUsers from "./component/EditUsers";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
function App() {
  return (
       <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Header}/>
              <Route exact path="/edit/:id" component={EditUsers} />
              <Route exact path="/all" component={AllUser}/>
              <Route exact path="/add" component={AddUser}/>
            </Switch>
       </BrowserRouter>
  );
}

export default App;
