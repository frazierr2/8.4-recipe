var Backbone = require('backbone');

var Recipe = Backbone.Model.extend({

});

var RecipeCollection = Backbone.Model.extend({
  model: Recipe,
  url: 'https://thefraz.herokuapp.com/classes/Recipe'
});

module.exorts = {
  Recipe: Recipe,
  RecipeCollection: RecipeCollection
};
