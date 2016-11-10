var Backbone = require('backbone');

// var ParseModel = Backbone.Model.extend({
//   idAttribute: 'objectId',
//   save: function(key, val, options){
//     delete this.attributes.createdAt;
//     delete this.attributes.updatedAt;
//
//     return Backbone.Model.prototype.save.apply(this, arguments);
//   }
// });

var Ingredient = Backbone.Model.extend({
  defaults: {
    name: '',
    quantity: '',
    unit: ''
  }
});

var IngredientCollection = Backbone.Collection.extend({
  model: Ingredient,
  baseUrl: 'https://thefraz.herokuapp.com/classes/Ingredient'
});

var Recipe = Backbone.Model.extend({
  idAttribute: 'objectId',
  defaults: {
    ingredients: []
  },
  urlRoot: 'https://thefraz.herokuapp.com/classes/Recipe',

});



var RecipeCollection = Backbone.Collection.extend({
  model: Recipe,
  url: 'https://thefraz.herokuapp.com/classes/Recipe',
  parse: function(data){
    // console.log('Recipe', data.results);
    return data.results;
  }
});

module.exports = {
  Ingredient: Ingredient,
  IngredientCollection: IngredientCollection,
  Recipe: Recipe,
  RecipeCollection: RecipeCollection
};
