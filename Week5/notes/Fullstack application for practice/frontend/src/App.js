import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import BooksView from './views/BooksView';
import SingleBookView from './views/SingleBookView';

function App() {
  return (//<Switch> defines what is going to be switched
    <div className="App">
      <BrowserRouter>
        <Switch> 
          <Route exact path="/" component={BooksView} />
          <Route exact path="/book/:id" component={SingleBookView} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
