//GLOBAL IMPORTS
var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');
require('backbone-react-component');


var NewRecipeContainer = React.createClass({
  getInitialState: function(){
    var name = '';
    var quantity = '';
    var units = '';
    var ingredient = '';

    return {
      name: name,
      quantity: quantity,
      units: units,
      ingredient: ingredient
    }
  },

  setRecipeName: function(e){
    var recipeName = e.target.value;
    this.setState({name: recipeName});
  },

  setRecipeQty: function(e){
    var recipeQty = e.target.value;
    this.setState({quantity: recipeQty});
  },

  setRecipeUnit: function(e){
    var recipeUnit = e.target.value;
    this.setState({units: recipeUnit});
  },

  setRecipeName: function(e){
    var recipeIngredient = e.target.value;
    this.setState({ingredient: recipeIngredient});
  },
  // setRecipe: function(e){
  //   e.preventDefault();
  //
  //   var userData = {
  //     name: this.state.name,
  //     quantity: this.state.quantity,
  //     units: this.state.units,
  //     ingredient: this.state.ingredient
  //   };
  //   this.state.setRecipe(userData);
  // },
  handleSubmit: function(userData){
    $.post('https://thefraz.herokuapp.com/classes/Recipe', userData).then(function(response){
      // console.log(response);
    })
  },

  render: function(){
    var self = this;
    return(
      <div className="container">
        <div className="row">
          <form onSubmit={self.handleSubmit}>
            <h2 className="text-center">New Recipe</h2>
          <div className="col-md-6 col-md-offset-3">
            <div className="form-group">
            <label htmlFor="recipeName">Recipe Name</label>
            <input onChange={self.setRecipeName} type="text" className="form-control" id="recipeName" placeholder="Recipe Name"/>
            </div>
            <h2 className="text-center">Ingredients</h2>
            <div className="form-group col-xs-3">
            <label htmlFor="numOfServings">Number of Units</label>
            <select className="form-control" id="numOfServings">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </div>
          <div className="form-group col-xs-3">
          <label htmlFor="unitOfMeasure">Units of Measurement</label>
          <select className="form-control" id="unitOfMeasure">
            <option>Teaspoon</option>
            <option>Tablespoon</option>
            <option>Ounce</option>
            <option>Cup</option>
            <option>Pound</option>
          </select>
        </div>
        <div className="form-group col-xs-6">
            <label htmlFor="ingredient">Ingredient <br/>Used</label>
            <input type="text" className="form-control" id="ingredient" placeholder="Ingredient"/>
        </div>

          </div>
        </form>
        </div>
      </div>
    )
  }
});

module.exports = {
  NewRecipeContainer: NewRecipeContainer
}
