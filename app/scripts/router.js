var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');


//LOCAL IMPORTS
var RecipeAdjustContainer = require('./components/adjustRecipe.jsx').RecipeAdjustContainer;
var LoginContainer = require('./components/login.jsx').LoginContainer;
var RecipeContainerHome = require('./components/recipeListing.jsx').RecipeContainerHome;
var NewRecipeContainer = require('./components/newRecipe.jsx').NewRecipeContainer;
var RecipeDetailContainer = require('./components/recipeDetail.jsx').RecipeDetailContainer;

var AppRouter = Backbone.Router.extend({
 routes: {
   '': 'index',
   'listing/': 'listing',
   'recipes/': 'recipes',
   'recipes/:id/': 'recipeDetail',
   'newrecipe/': 'newrecipe'
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
    React.createElement(RecipeAdjustContainer, {router: this}),
    document.getElementById('app')
  );
},

newrecipe: function(){
  ReactDOM.render(
    React.createElement(NewRecipeContainer,{router: this}),
    document.getElementById('app')
  )
},

recipeDetail: function(recipeId){
  ReactDOM.render(
    React.createElement(RecipeDetailContainer, {recipeId: recipeId}),
    document.getElementById('app')
  )
}

});

var router = new AppRouter();

module.exports = router;
