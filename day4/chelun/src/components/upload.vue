<template>
  <ul>
    <li v-for="(item, index) in list" :key="index" @click="click(item)">
      <img v-if="item.src" :src="item.src">
      <img v-else class="add" :src="addImg">
      <p>{{item.desc}}</p>
    </li>
    <section v-show="showMask" class="mask">
      <img :src="current.demo">
      <div>
        <button @click="upload(1)">拍照</button>
        <button @click="upload(2)">相册</button>
        <button @click="cancel">取消</button>
      </div>
    </section>
  </ul>
</template>

<script>
// 引入辅助方法
import {mapState, mapMutations} from 'vuex'
import add from '../assets/add.png'
// 引入api调用
import {uploadImg} from '../api/index'
export default {
  data(){
    return {
      current: {},
      showMask: false
    }
  },
  computed: {
    ...mapState({
      list: state=>state.upload.list
    }),
    addImg(){
      return add;
    }
  },
  methods: {
    ...mapMutations({
      updateLista: 'upload/updateList'
    }),
    click(item){
      this.current = item;
      this.showMask = true;
    },
    cancel(){
      this.showMask = false;
    },
    async upload(type){
      let res = await uploadImg(type);
      let index = this.list.findIndex(item=>item==this.current);
      console.log('index...', index);
      this.updateLista({
        index,
        // src: 'http://picture.eclicks.cn/g2//l//2019//01//02//454a564ad63ddda5_640_853.jpg',
        src: res.data.url
      })
      this.showMask = false;
    }
  }
}
</script>

<style lang="scss" scoped>
ul{
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
}
li{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img{
    border-radius: 10px;
    width:  44px;
    height: 34px;
    border: 1px solid #c0c0c0;
  }
  p{
    font-size:  14px;
    padding: 1px 3px;
    text-align: center;
  }
}
.add{
  width:  24px;
  height: 24px;
  padding: 5px 10px;
}
.mask{
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0, .5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  img{
    width: 90%;
    margin-top: 20%;
  }
  div{
    display: flex;
    width: 90%;
    flex-direction: column;
    align-items: center;
    button{
      width: 100%;
      height: 50px;
      font-size: 14px;
      letter-spacing: 1px;
      border: none;
      border-radius: 15px;
      color: #3aafc0;
      outline: none;
      margin-bottom: 3px;
    }
    button:first-child{
      border-radius: 15px 15px 0 0;
    }
    button:nth-child(2){
      border-radius: 0 0 15px 15px;
    }
    button:last-child{
      margin: .15px 0;
    }
  }
}
</style>
