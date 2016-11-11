//GLOBAL IMPORTS
var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');
require('backbone-react-component');

var models = require('../models/recipe.js');


var RecipeForm = React.createClass({
  getInitialState: function(){
    var name = '';
    var quantity = '';
    var units = '';
    var item = '';
    var servings = ''

    return {
      name: name,
      servings: servings,
      quantity: quantity,
      units: units,
      item: item
    }
  },

  setRecipeName: function(e){
    var recipeName = e.target.value;
    this.setState({name: recipeName});
  },

  setServings: function(e){
    var servingNumber = e.target.value;
    this.setState({servings: servingNumber})
  },

  setRecipeQty: function(e){
    var recipeQty = e.target.value;
    this.setState({quantity: recipeQty});
  },

  setRecipeUnit: function(e){
    var recipeUnit = e.target.value;
    this.setState({units: recipeUnit});
  },

  setRecipeItem: function(e){
    var recipeIngredient = e.target.value;
    this.setState({item: recipeIngredient});
  },


  handleSubmit: function(e){
    e. preventDefault();
    // console.log(this.state);
    var newRecipe = {
      name: this.state.name,
      servings: parseInt(this.state.servings),
      ingredients: [{
        'qty': parseInt(this.state.quantity),
        'unit': this.state.units,
        'item': this.state.item
      }]
    };

    this.props.handleSubmit(newRecipe);
  },



  render: function(){
    var self = this;
    return(
      <div className="container">
        <div className="row">
          <form onSubmit={self.handleSubmit} >
            <h2 className="text-center">New Recipe</h2>
          <div className="col-md-6 col-md-offset-3">
            <div className="form-group">
            <label htmlFor="recipeName">Recipe Name</label>
            <input onChange={self.setRecipeName} type="text" className="form-control" id="recipeName" placeholder="Recipe Name"/>
            </div>
            <div className="form-group">
            <label htmlFor="servingNumber">Number of Servings</label>
            <input onChange={self.setServings} type="text" className="form-control" id="servingNumber" placeholder="Number of Servings"/>
            </div>
            <h2 className="text-center">Ingredients<button type="button" className="btn btn-danger btn-sm add-new">Add New Ingredient</button></h2>
            <div className="form-group col-xs-3">
            <label htmlFor="numOfServings">Number of Units</label>
            <select onChange={self.setRecipeQty} className="form-control" id="numOfServings">
              <option></option>
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
          <select onChange={self.setRecipeUnit} className="form-control" id="unitOfMeasure">
            <option></option>
            <option>Teaspoon</option>
            <option>Tablespoon</option>
            <option>Ounce</option>
            <option>Cup</option>
            <option>Pound</option>
          </select>
        </div>
        <div className="form-group col-xs-6">
            <label htmlFor="ingredient">Ingredient <br/>Used</label>
            <input onChange={self.setRecipeItem} type="text" className="form-control" id="ingredient" placeholder="Ingredient"/>
        </div>
        <div className="submit-new">
        <button type="submit" className="btn btn-primary btn-lg submit-new">Save Recipe</button>
        </div>
        </div>

        </form>
        </div>
      </div>
    )
  }
});



var NewRecipeContainer = React.createClass({
  getInitialState: function(){
    return{
      recipe: new models.Recipe()
    };
  },

    handleSubmit: function(newRecipe){
      // console.log(newRecipe);
      // console.log(this.state.recipe);
    this.state.recipe.save(newRecipe);

  //     recipe.save().then(() => {
  //       Backbone.history.navigate('listing/', {trigger: true});
  // });
},
  render: function(){
    return(
      <div>
        <RecipeForm  handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
});
module.exports = {
  NewRecipeContainer: NewRecipeContainer
}
