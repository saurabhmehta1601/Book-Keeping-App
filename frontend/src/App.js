import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar/navbar';
import Books from './components/Books/Books'
import AddBook from './components/Books/AddBooks'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/books" component={Books}/>
        <Route exact path="/addbook" component={AddBook}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
