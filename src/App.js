import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './containers/Dashboard';
import AddResume from './containers/addResume';
import ViewResume from './containers/viewResume';
import AddEducation from './containers/addEducation';
import AddExperience from './containers/addExperience';
import AddSkill from './containers/addSkill';

function App() {
  return (
    <Router>
    <Provider store={store}>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/add" component={AddResume} />
      <Route exact path="/view" component={ViewResume} />
      <Route exact path="/education" component={AddEducation} />
      <Route exact path="/experience" component={AddExperience} />
      <Route exact path="/skill" component={AddSkill} />
    </Provider>
  </Router>
  );
}

export default App;
