var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');


//LOCAL IMPORTS
var RecipeContainer = require('./components/recipe.jsx').RecipeContainer;

var AppRouter = Backbone.Router.extend({
 routes: {
   'recipes/': 'recipes'
 },

recipes: function(){
  ReactDOM.render(
    React.createElement(RecipeContainer, {router: this}),
    document.getElementById('app')
  );
}

});

var router = new AppRouter();

module.exports = router;
