//GLOBAL IMPORTS
var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');
require('backbone-react-component');

//LOCAL IMPORTS
var RecipeListView = require('./recipeListingTemplate.jsx').RecipeListView;
var RecipeCollection = require('../models/recipe.js').RecipeCollection;

var RecipeList = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  // getInitialState: function(){
  //   var self = this;
  //   var recipeView = new RecipeCollection();
  //   console.log(recipeView);
  //   recipeView.fetch().then(function(){
  //     self.setState({collection: recipeView});
  //   })
  //   return {
  //     collection: recipeView
  //   }
  //
  // },
  render: function(){
    var collection = this.getCollection();
    var recipeList = collection.map(function(recipe){
      // console.log(recipe);
      return (<li key={recipe.get('objectId') || recipe.cid}>
        {recipe.get('qty')}
        {recipe.get('units')}
        {recipe.get('name')}

      </li>)
    })
    return (
      <ul>
        {recipeList}

      </ul>
    )
  }
});
var RecipeContainerHome = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getDefaultProps: function(){
    var collection = new RecipeCollection();
    collection.fetch()
    // console.log(collection);
    return {
      collection: collection
    };
  },

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
