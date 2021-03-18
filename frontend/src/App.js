import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar/navbar';
import Books from './components/Books/Books'
import AddBook from './components/Books/AddBooks'
import RegisterUser from './components/users/RegisterUser';
import LoginUser from './components/users/loginUser'
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/books" component={Books}/>
        <Route exact path="/addbook" component={AddBook}/>
        <Route exact path="/register" component={RegisterUser}/>
        <Route exact path="/login" component={LoginUser}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
