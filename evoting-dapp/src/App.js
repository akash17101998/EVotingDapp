import logo from './logo.svg';
import './App.css';
import Admin from './pages/Admin';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';
import NavBar from './Components/NavBar';



// react component
export default function App() {



  return ( // JSX
    <Router>
      <div className="App">
          <NavBar />
      </div>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/User' element={< User />}></Route>
        <Route exact path='/Admin' element={< Admin />}></Route>
      </Routes>
    </Router>
  );
}
