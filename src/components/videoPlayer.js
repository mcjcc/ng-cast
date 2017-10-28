angular.module('video-player')

.component('videoPlayer', {
  // TODO
  bindings: {
    video: '<'
  },

  controller: function() {
    // if videos is undefined
    // show something else
      
    //this.videoUrl = 'https://www.youtube.com/embed/' + this.video.id.videoId;
    this.$onInit = function() {
      console.log('current video', this.video);
    };
  
  },
  
  templateUrl: 'src/templates/videoPlayer.html'
});
