//GLOBAL IMPORTS
var React = require('react');


var RecipeListView = React.createClass({
  render: function(){
    return (
      <div className="col-md-8 col-md-offset-2 well">
        <h1 className="text-center">RECIPES</h1>
        <nav className="navbar navbar-inverse">
          <ul className="nav nav-pills">
            <li role="presentation" className="active"><a href="#">Recipe Home</a></li>
            <li role="presentation"><a href="#">New Recipe</a></li>
          </ul>
        </nav>

          {this.props.children}

      </div>
    )
  }
});

module.exports = {
  RecipeListView: RecipeListView
}
