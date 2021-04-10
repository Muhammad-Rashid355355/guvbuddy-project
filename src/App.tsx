import './App.css';
import {
  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from './pages/LoginPages/LoginPage';
import SelectSource from './pages/SelectCommiteSource/SelectCommiteeSourse';
import Main from './pages/Main';
import MemberData from './pages/Member-Data/MemberData';
import DataRecord from './pages/Data Record/DataRecord';
import MemberPage2 from './pages/MemberPage2/MemberPage';
import OverViewPage from './pages/overViewPage/OverViewPage';
import ConfermChangesPage from './pages/ConfermChangesPage/ConfermChangesPage';

function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route exact path="/loginpage" component={LoginPage}/>
          <Route exact path="/dashboard" component={SelectSource}/>
          <Route exact path="/memberPage" component={MemberData}/>
          <Route exact path ="/overviewpage" component={OverViewPage}/>
          <Route exact path ="/changesPages" component={ConfermChangesPage}/>

          <Route exact path='/resultPage' component={DataRecord}/>
          <Route exact path='/memberpage2' component={MemberPage2}/>
        </Switch>
     <Main/>
        </Router>
    
    </div>
  );
}

export default App;
