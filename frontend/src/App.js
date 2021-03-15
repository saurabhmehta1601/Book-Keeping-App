import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar/navbar';
import Books from './components/Books/Books'
import AddBook from './components/Books/AddBooks'
import RegisterUser from './components/users/RegisterUser';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/books" component={Books}/>
        <Route exact path="/addbook" component={AddBook}/>
        <Route exact path="/register" component={RegisterUser}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
