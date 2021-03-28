import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Graph from './components/Graph';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/graph/:id" component={Graph}/>
        <Route exact path="/login" component={Login}/>
      </Router>
      
    </div>
  );
}

export default App;
