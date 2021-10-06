import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Resume from './components/resume';
import AddResume from './components/addResume';
import Dashboard from './components/Dashboard';
import ViewResume from './components/viewResume';

function App() {
  return (
    <Router>
    <Provider store={store}>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/add" component={AddResume} />
      <Route exact path="/view" component={ViewResume} />
      <Route exact path="/edit1" component={Resume} />
    </Provider>
  </Router>
  );
}

export default App;
