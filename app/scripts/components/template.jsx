var React = require('react');


var TemplateContainer = React.createClass({
  render: function(){
    return (
          <div className="container">

            {this.props.children}

          </div>
    )
  }
});

module.exports = {
  TemplateContainer: TemplateContainer
}
