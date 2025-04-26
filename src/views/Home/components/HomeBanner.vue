
<script>
export default {
    name: 'index',
    data(){
        return {
            imgList001: [
                {id:0,idView:'src/tupian-ziyong/001.jpg'},
                {id:1,idView:'src/tupian-ziyong/002.jpg'},
                {id:2,idView:'src/tupian-ziyong/003.jpg'},
                {id:3,idView:'src/tupian-ziyong/004.jpg'},
                   
            ]
        };
        },
    methods: { 
    }
}
</script>
 


 
<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <<el-carousel-item v-for="item in imgList001" :key="item.id">
        <img :src="item.idView" class="image">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
 



<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
.index{
    background: #c8cfd8;
    width: 80%;
    text-align: center;
    margin-left: 142px;
    width: 80.6%;
    
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
 
</style>
 