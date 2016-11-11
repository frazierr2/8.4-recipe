//GLOBAL IMPORTS
var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');
require('backbone-react-component');

var models = require('../models/recipe.js');


var IngredientForm = React.createClass({
    // getInitialState: function(){
    //   return this.props.ingredient.toJSON();
    // },

    componentWillReceiveProps: function(newProps){
      this.setState(newProps.ingredient.toJSON());
    },

    handleInputChange: function(e){
      var ingredientField = e.target;


      var newState = {};
      newState[ingredientField.name] = ingredientField.value; // {'amount': 24}
      this.setState(newState);
      this.props.ingredient.set(ingredientField.name, ingredientField.value);
    },
    render: function(){
      return (
        <div>

          <div className="form-group col-xs-3">
          <select onChange={this.handleInputChange} className="form-control" id="numOfServings" name="qty">
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
        <select onChange={this.handleInputChange} className="form-control" id="unitOfMeasure" name="units">
          <option></option>
          <option>Teaspoon</option>
          <option>Tablespoon</option>
          <option>Ounce</option>
          <option>Cup</option>
          <option>Pound</option>
        </select>
      </div>
      <div className="form-group col-xs-6">
          <input onChange={this.handleInputChange} type="text" className="form-control" id="ingredient" placeholder="Ingredient" name="item"/>
      </div>

        </div>
      )
    }
});


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
      ingredients: this.props.recipe.get("ingredients")
    };

    this.props.handleSubmit(newRecipe);
  },



  render: function(){
    var recipe = this.props.recipe;
   var heading = recipe.isNew() ? 'Add' : 'Edit';
   var ingredientFormset = recipe.get('ingredients').map(function(ingredient){
     return (
       <IngredientForm key={ingredient.cid} ingredient={ingredient}/>
     )
   });


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
            <h2 className="text-center">Ingredients<button onClick={self.props.addIngredient}type="button" className="btn btn-danger btn-sm add-new">Add New Ingredient</button></h2>
            {ingredientFormset}
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
    this.state.recipe.save(newRecipe);
    Backbone.history.navigate('listing/', {trigger: true});
},

addIngredient: function(){
    var recipe = this.state.recipe;
    var currentCounter = this.state.counter;
    var ingredients = recipe.get('ingredients');
    ingredients.add([{}]);
    recipe.set("ingredients", ingredients);
    this.setState({recipe: recipe});
  },


  render: function(){
    return(
      <div>
        <RecipeForm recipe={this.state.recipe} addIngredient={this.addIngredient} handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
});
module.exports = {
  NewRecipeContainer: NewRecipeContainer
}
