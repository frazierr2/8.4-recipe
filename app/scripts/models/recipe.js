var Backbone = require('backbone');

var Recipe = Backbone.Model.extend({
  idAttribute: 'objectId'
});

var RecipeCollection = Backbone.Collection.extend({
  model: Recipe,
  url: 'https://thefraz.herokuapp.com/classes/Recipe',
  parse: function(data){
    console.log('Recipe', data.results);
    return data.results;
  }
});

module.exports = {
  Recipe: Recipe,
  RecipeCollection: RecipeCollection
};
