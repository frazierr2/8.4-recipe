//GLOBAL IMPORTS
var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');

//LOCAL IMPORTS
var RecipeListView = require('./recipeListingTemplate.jsx').RecipeListView;
var RecipeCollection = require('../models/recipe.js').RecipeCollection;

var RecipeList = React.createClass({
  getInitialState: function(){
    var self = this;
    var recipeView = new RecipeCollection();
    // console.log(recipeView);
    recipeView.fetch().then(function(){
      self.setState({collection: recipeView});
    })
    return {
      collection: recipeView
    }

  },
  render: function(){
    return (
      <div>
        <span>testing</span>
        <span>testing2</span>
      </div>
    )
  }
});
var RecipeContainerHome = React.createClass({
  render: function(){
    return (
      <RecipeListView>
        <RecipeList />
      </RecipeListView>
    )
  }
});

module.exports = {
  RecipeContainerHome: RecipeContainerHome
}
