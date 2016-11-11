var Backbone = require('backbone');


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
    ingredients: new IngredientCollection()
  },
  urlRoot: 'https://thefraz.herokuapp.com/classes/Recipe',
  // save: function(key, val, options){
  //  // Convert ingredients collection to array for parse
  //  this.set('ingredients', this.get('ingredients').toJSON());
  //
  //  return Model.prototype.save.apply(this, arguments);
// }

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
