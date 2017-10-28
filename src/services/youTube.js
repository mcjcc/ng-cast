angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  var request = {
    query: '',
    maxResults: 5,
    part: 'snippet',
    key: window.YOUTUBE_API_KEY
  };

  this.search = function(request) {
    var ajaxObject = $http({
      url: 'https://www.googleapis.com/youtube/v3/search/',
      type: 'GET',
      params: request,
      
    }).then(function successfulCallback(response) {
      console.log('success!');

    }, function errorCallback(response) {
      console.log('did not work!');
    });
    
    return ajaxObject;
  };
});


