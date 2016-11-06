var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');


//LOCAL IMPORTS
var RecipeContainer = require('./components/recipe.jsx').RecipeContainer;
var LoginContainer = require('./components/login.jsx').LoginContainer;
var RecipeContainerHome = require('./components/recipeListing.jsx').RecipeContainerHome;


var AppRouter = Backbone.Router.extend({
 routes: {
   '': 'index',
   'listing/': 'listing',
   'recipes/': 'recipes'
 },

index: function(){
  ReactDOM.render(
    React.createElement(LoginContainer, {router: this}),
    document.getElementById('app')
  );
},

listing: function(){
  ReactDOM.render(
    React.createElement(RecipeContainerHome, {router: this}),
    document.getElementById('app')
  );
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
