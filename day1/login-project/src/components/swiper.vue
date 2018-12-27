<template>
    <swiper :options="swiperops" class="swiper">
        <swiper-slide>
            <img src="../../static/images/banner.jpg" :style="{width:'100%'}">
        </swiper-slide>
        <swiper-slide>
            <img src="../../static/images/banner1.jpg" :style="{width:'100%'}">
        </swiper-slide>
        <swiper-slide>
            <img src="../../static/images/banner.jpg" :style="{width:'100%'}">
        </swiper-slide>
        <swiper-slide>
            <img src="../../static/images/banner1.jpg" :style="{width:'100%'}">
        </swiper-slide>
    </swiper>
</template>
<script>
import {swiper,swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.min.css";
export default {
    name:"swiperParent",
    props:['banner'],
    components:{
        swiper,
        swiperSlide
    },
    data(){
        return{
            swiperops:{
                loop:true,
                autoplay:true
            }
        }
    }
}
</script>

<style scoped >
    .swiper{
        width: 96%;
        border-radius: 5px;
    }
    img{
        border-radius: 5px;
    }
</style>

