<template>
  <div id="canvas">
      <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import bg from '../assets/1.jpg'
import {imgTobase64,uploadBase64} from '../api/index'
// import bg2 from '../assets/2.jpg'
export default {
  name: "Canvas",
  computed:{
      canvas(){
          return this.$refs.canvas
      },
      context(){
          return this.$refs.canvas.getContext('2d');
      }
  },
  methods:{
      loadImage(src){
          return new Promise((resolve,reject)=>{
              let img =new Image();
              img.src=src;
              img.onload=()=>{
                  resolve(img)
              };
              img.onerror=()=>{
                  reject();
              }
          })
      }
  },
  async mounted(){
      let {canvas,context,loadImage}=this;

      let img=await loadImage(bg);
          canvas.width=img.width;
          canvas.height=img.height;
          context.drawImage(img,0,0,img.width,img.height,0,0,img.width,img.height)
          let imgUrl='https://avatars1.githubusercontent.com/u/8192412?s=460&v=4';
          let response=await imgTobase64(imgUrl)
          console.log(response)
          let imgs=await loadImage(response.data.base64)
          console.log(imgs)
          context.save();
          context.beginPath();
          context.arc(140, 795, 40, 0, Math.PI * 2);
          context.clip();
          context.drawImage(imgs, 100, 755,80,80);
          context.restore();
          context.font="24px Verdana";
          context.textAlign="center";
          context.textBaseline="middle";
          context.fillText("刘鸿超",140,855);
        let base64 = canvas.toDataURL('image/jpeg');
        const upload =await uploadBase64(base64)
        console.log('upload...',upload)
  }
};
</script>

<style>
    .canvas{
        width: 100%;
        height: 100%;
    }
    canvas{
        width: 100%;
    }
</style>
