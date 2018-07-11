import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Recipe from "./pages/Recipe";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";

class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
          <div>
            <header>

            </header>
            <Route path="/Home" component={Home} />
            <Route path="/Recipe" component={Recipe} />
            <Route path="/RecipeDetail" component={RecipeDetail} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
