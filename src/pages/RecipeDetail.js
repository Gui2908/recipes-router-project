import React, { Component } from 'react';
import store from "../store/store";

class RecipeDetail extends Component {
  constructor(props){
    super(props)
      this.state = {
        recipes : store
    }
  }

  render() {
    console.log(this.state.recipes)

      let recipesDetail = this.state.recipes[0]
        return (
          <div>
            <h1>{recipesDetail.name}</h1>
          </div>
        );
  }
}



export default RecipeDetail;
