import React, { Component } from 'react';
import store from "../store/store";

class Recipe extends Component {
  constructor(props){
    super(props)
      this.state = {
        recipes : store
      }
  }
  render() {
    console.log(this.state.recipes)
    console.log(this.state.recipes[0].name)
    let recipesList = this.state.recipes.map(function(recipe) {

      return (
        <div>
          <h1>{recipe.name}</h1>

        </div>
      );
    })
    return (
      <div>
        {recipesList}
      </div>

    )
  }
}

export default Recipe;
