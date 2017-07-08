import axios from "axios";

var geocodeAPI = "35e5548c618555b1a43eb4759d26b260";

var helpers = {
  runQuery: (location) => {
    console.log(location);
    // Figure out the geolocation
    var queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + location + "&pretty=1&key=" + geocodeAPI;
    return axios.get(queryURL).then((response) => {
      console.log(response);
      return response.data.results[0].formatted;
    });
  },
  
  saveSearch: function(searchInfo){
    console.log("search info is: " + JSON.stringify(searchInfo));
    return axios.post("/search", searchInfo);
  },

  getSearches: function()
  {
    return axios.get("/search");
  }
};

export default helpers;