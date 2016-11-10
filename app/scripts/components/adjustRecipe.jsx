//GLOBAL IMPORTS
var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');

//LOCAL IMPORTS
var TemplateContainer = require('./template.jsx').TemplateContainer;
var models = require('../models/recipe');


$.ajaxSetup({
  beforeSend: function(xhr){
    xhr.setRequestHeader("X-Parse-Application-Id", 'ryansparseserver');
    xhr.setRequestHeader('X-Parse-REST-API-Key','ryansapikey')
  }
});

var RecipeAdjust = React.createClass({
  getInitialState: function(){
    return {
      qty: ''
    };
  },

  // componentWillReceiveProps: function(nextProps){
  //   this.setState({qty: nextProps.qty});
  // },

  handleQty: function(e){
    this.setState({qty: e.target.value});
    this.props.adjustQtys(e.target.value);
  },

  handleSubmit: function(e){
    e.preventDefault();

    this.props.adjustQtys(this.state.qty);
  },
  render: function(){
    return (
      <div className="row">
      <div className="col-md-6 col-md-offset-3 well serving-row">
        <form onSubmit={this.handleSubmit} className="form-inline">
          <div className="form-group serving-form col-md-6">
              <label htmlFor="servings"><strong>servings</strong></label>
              <input onChange={this.handleQty} type="text" value={this.state.qty} className="serving-input col-md-2"></input>
          </div>
          <div className="adjust-btn col-md-6">
            <button type="button" className="btn btn-secondary">Adjust Recipe</button>
          </div>
        </form>
      </div>
      </div>
    );
  }
});


var RecipeList = React.createClass({

  render: function(){
    // var ingredients = this.props.ingredients;
    // console.log(this.props);
    var factor = this.props.factor;
    var ingredientListItems = this.props.ingredients.map(function(ingredient){
      // console.log(ingredient);
      var adjustedAmount = ingredient.qty * factor;
      var amount = parseInt(adjustedAmount) === adjustedAmount ? adjustedAmount : adjustedAmount.toFixed(2);

      return (
        <li key={ingredient.cid} className="list-group-item">
          <input type="checkbox" /> {amount} {ingredient.units} {ingredient.item}
        </li>
      )
    });
    return (
      <div className="row ">
        <ul className="col-md-6 col-md-offset-3 well">
          {ingredientListItems}
        </ul>
      </div>
    );
  }
});


var RecipeAdjustContainer = React.createClass({
  getInitialState: function(){
    return {
      factor: 1,
      servings: 0
    };
  },

  componentWillReceiveProps: function(nextProps){
    this.setState({servings: nextProps.recipe.get('servings')});
  },

  adjustQtys: function(newServings){
    var recipe = this.props.recipe;
    var newFactor = (newServings / recipe.get('servings')) || 1;
      // console.log(ingredients);
    this.setState({servings: newServings, factor: newFactor});

  },

  render: function(){
    // console.log(this.props.recipe.get('ingredients'));
    var ingredients = this.props.recipe.get('ingredients');

    return (
      <TemplateContainer>
        <RecipeAdjust qty={this.state.servings} adjustQtys={this.adjustQtys}/>
        <RecipeList factor={this.state.factor} ingredients={ingredients}/>
      </TemplateContainer>
    );
  }
});

module.exports = {
  RecipeAdjustContainer: RecipeAdjustContainer
}
