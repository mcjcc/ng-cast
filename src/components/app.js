angular.module('video-player')

.component('app', {
  // pass in serach youtube service dependency somehow
  bindings: {
    exampleVideoData: '<',
  },

  controller: function(youTube) {
      


    this.searchValue = '';

    this.$onInit = function() {
      this.searchResults('');
    };


    
    this.searchResults = (string) => {
      console.log('searchResults called!');
      youTube.search(string, (data) => { 
        this.videos = data;
        this.currentVideo = this.videos[0];    
      });
    };

    this.onClickSearch = (string) => {      
      this.searchResults(this.searchValue);
    };

    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
    };

    this.onClick = (index) => {      
      this.selectVideo(index);
    };

    
    
  },

  templateUrl: 'src/templates/app.html'
});

