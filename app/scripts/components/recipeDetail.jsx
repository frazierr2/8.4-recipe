var React = require('react');
var Bacbone = require('backbone');
var models = require('../models/recipe');

var RecipeAdjustContainer = require('./adjustRecipe.jsx').RecipeAdjustContainer;
var RecipeListView = require('./recipeListingTemplate.jsx').RecipeListView;

var RecipeHeading = React.createClass({
  render: function(){
    return (
      <div>
        <h1>{this.props.recipe.get('name')}</h1>
        <a href={'#recipes/' + this.props.recipe.get('objectId') + '/edit/'}>Edit</a>
      </div>
    );
  }
});

var RecipeDetailContainer = React.createClass({
  getInitialState: function(){
    return {
      recipe: new models.Recipe()
    }
  },

  componentWillMount: function(){
        console.log('recipe', this.state.recipe);
    var recipe = this.state.recipe,
     recipeId = this.props.recipeId;

    if(!recipeId){
      return;
    }

    recipe.set('objectId', recipeId);
    recipe.fetch().then(() => {
      this.setState({recipe: recipe});
    });
  },


  render: function(){
    return (
      <RecipeListView>
        <RecipeHeading recipe={this.state.recipe}/>
        <RecipeAdjustContainer recipe={this.state.recipe}/>
      </RecipeListView>
    )
  }
});

module.exports = {
  RecipeDetailContainer: RecipeDetailContainer
}
