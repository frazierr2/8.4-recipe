//GLOBAL IMPORTS
var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');

//LOCAL IMPORTS
var TemplateContainer = require('./template.jsx').TemplateContainer;


$.ajaxSetup({
  beforeSend: function(xhr){
    xhr.setRequestHeader("X-Parse-Application-Id", 'ryansparseserver');
    xhr.setRequestHeader('X-Parse-REST-API-Key','ryansapikey')
  }
});

var RecipeAdjust = React.createClass({
  render: function(){
    return (
      <div className="row">
      <div className="col-md-6 col-md-offset-3 well serving-row">
        <form className="form-inline">
          <div className="form-group serving-form col-md-6">
              <label htmlFor="servings"><strong>servings</strong></label>
              <input className="serving-input col-md-2"></input>
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
    return (
      <div className="row ">
        <ul className="col-md-6 col-md-offset-3 well">

        </ul>
      </div>
    );
  }
});


var RecipeContainer = React.createClass({
  // $.post('https://thefraz.herokuapp.com/classes/Recipe')
  render: function(){
    return (
      <TemplateContainer>
        <RecipeAdjust />
        <RecipeList />
      </TemplateContainer>
    );
  }
});

module.exports = {
  RecipeContainer: RecipeContainer
}
