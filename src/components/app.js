angular.module('video-player')

.component('app', {
  // pass in serach youtube service dependency somehow
  bindings: {
    exampleVideoData: '<'
  },

  controller: function() {
    
    this.videos = exampleVideoData;
    this.currentVideo = this.videos[0];
    console.log('exampleVideData app: ', this.videos);
    console.log('current Video: ', this.currentVideo);

    this.$onInit = () => {
      // this.currentVideo = exampleVideoData.videos[0];
      
    };

    this.searchResults = () => {
      // youtube.search
    };

    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
    };

    this.onClick = (index) => {
      console.log('Im clicked on!!!');
      this.selectVideo(index);
    };
  },

  templateUrl: 'src/templates/app.html'
});

