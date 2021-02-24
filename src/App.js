import logo from './logo.svg';
import './App.css';
//Get homepage component to main component
import HomePage from './pages/homepage/homepage.component';
import {Route} from'react-router-dom';


const SanjuName =() => (
  <div>
    <h1>name:sanju
        place:aluvad
        age:22yrs
    </h1>
    </div>
)

//RENDERING
function App() {
  return (
    <div>
    <Route path="/" component={HomePage}/>
    <Route path="/sanju" components={SanjuName}/>
    </div>
  );
}

export default App;