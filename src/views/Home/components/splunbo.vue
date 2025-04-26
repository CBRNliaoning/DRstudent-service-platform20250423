<template>
    <div>
      <video-player class="video-player vjs-custom-skin"
                    ref="videoPlayer"
                    :playsinline="true"
                    :options="playerOptions"
                    @play="onPlayerPlay($event)"
                    @pause="onPlayerPause($event)">
      </video-player>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        playerOptions: {
          // 视频配置项
          sources: [{
            type: "video/mp4",
            src: "../../../tupian-ziyong/《死亡搁浅》交响音乐会 全球巡演宣传片.mp4"
          }],
         
        }
      };
    },
    methods: {
      onPlayerPlay(event) {
        console.log('player play');
      },
      onPlayerPause(event) {
        console.log('player pause');
      }
    }
  };
  </script>
  