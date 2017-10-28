angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  this.search = function(queryString, callback) {
    console.log(queryString);
    var request = {
      q: queryString, //queryString
      maxResults: 5,
      part: 'snippet',
      key: window.YOUTUBE_API_KEY
    };
    $http({
      url: 'https://www.googleapis.com/youtube/v3/search/',
      type: 'GET',
      params: request,
      
    }).then(function successfulCallback(response) {
      console.log('success!');
      var videos = response.data.items;
      return callback(videos);

    }, function errorCallback(response) {
      console.log('did not work!');
    });
    
    
  };
});


