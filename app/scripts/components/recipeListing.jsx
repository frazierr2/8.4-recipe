//GLOBAL IMPORTS
var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');
require('backbone-react-component');

//LOCAL IMPORTS
var RecipeListView = require('./recipeListingTemplate.jsx').RecipeListView;
var RecipeCollection = require('../models/recipe.js').RecipeCollection;

var ListItem = React.createClass({
  render: function(){
    var recipe = this.props.recipe;
    return (
      <h3><a href={'#recipes/' + this.props.recipe.get('objectId') + '/edit/'}>{recipe.get('name')}</a></h3>
    )
  }
});

var RecipeList = React.createClass({
  render: function(){
    var recipeList = this.props.collection.map(function(recipe){
      return <ListItem key={recipe.cid} recipe={recipe}/>
    });
    return (
      <ul>
        {recipeList}
      </ul>
    )
  }
});
var RecipeContainerHome = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    return {
      collection: new RecipeCollection()
    };
  },
  componentWillMount: function(){
    var self = this;
    var collection = this.state.collection;
    collection.fetch().then(function(){
      self.setState({collection: collection});
    });

  },

  render: function(){
    return (
      <RecipeListView>
        <RecipeList collection={this.state.collection}/>
      </RecipeListView>
    )
  }
});

module.exports = {
  RecipeContainerHome: RecipeContainerHome
}
