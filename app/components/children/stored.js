var React = require("react");

// Creating the Results component
var storedInfo= React.createClass({

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Saved Articles</h3>
        </div>
        <div className="panel-body text-center">
          <h1>Searches:</h1>
          <p>{this.props.storedInfo}</p>
        </div>
      </div>
    );
  }
});

module.exports = storedInfo;