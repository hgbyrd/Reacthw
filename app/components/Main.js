import React from "react";

var Form = require("./children/form.js");
var Results = require("./children/results.js");
var storedInfo = require("./children/stored.js");

var helpers =  require("./utils/helpers.js");

var Main = React.createClass({

  getInitialState: function() {
    return { searchTerm: "", results: "", storedInfo: [] };
  },

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      console.log("UPDATED");

      helpers.runQuery(this.state.searchTerm).then((data) => {
        if (data !== this.state.results) {
          console.log(data);
          this.setState({ results: data });
      }});

      helpers.saveSearch({"search": this.state.searchTerm, "date": Date.now()}).then(function(data){
        console.log("Search Saved");
        console.log(JSON.stringify(data, null, 2));

      helpers.getstoredInfo().then(function(data){
          this.setState({storedInfo: data.data});
        }.bind(this));
      }.bind(this));
    }
  },

  setTerm(term) {
    this.setState({
      searchTerm: term
    });
  },

  render(){

    return(

      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">Address Finder!</h2>
            <p className="text-center">
              <em>Enter a landmark to search for its exact address.</em>
            </p>
          </div>
          <div className="col-md-6">
            <Form setTerm={this.setTerm} />
          </div>
          <div className="col-md-6">
            <Results address={this.state.results} />
          </div>
          <div className = "row">
            <storedInfo storedInfo={this.state.storedInfo} />
          </div>
        </div>
      </div>

    );
  }

});

// export default Main;

module.exports = Main;