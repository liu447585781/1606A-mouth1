<template>
  <div class="list">
    <div class="header">
      <div class="h-top">
        <span><img src="../../assets/imgs/logo.png" alt=""></span>
        <p @click="search">大家都在搜 : 池子退出吐槽大会</p>
        <span><img src="../../assets/imgs/bj.png" alt=""></span>
      </div>
      <div class="h-bottom">
        <ul>
          <li v-for="(val,ind) in datas" :class="{'active':ind==flag}" @click="btn(ind)">
            {{val.name}}
          </li>
        </ul>
      </div>
    </div>
    <div class="body">
        this is body
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: 0,
      datas: [
        {
          id: 1,
          name: "热门"
        },
        {
          id: 2,
          name: "新鲜事"
        },
        {
          id: 3,
          name: "搞笑"
        },
        {
          id: 4,
          name: "情感"
        },
        {
          id: 5,
          name: "明星"
        },{
          id: 6,
          name:'社会'
        },{
          id: 7,
          name:'数码'
        },{
          id: 8,
          name:'体育'
        },{
          id: 9,
          name:'汽车'
        },{
          id: 10,
          name:'电影'
        },{
          id: 11,
          name:'游戏'
        }
      ]
    };
  },
  methods: {
    btn(dat) {
      console.log(dat)

      this.flag = dat;
    },
    search(){
      this.$router.push('/list/search');
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
html,
body,
#__nuxt,
#__layout,
#__layout > div {
  width: 100%;
  height: 100%;
}
.list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.header {
  height: 84px;
  background: #fafafa;
  border-bottom: 1px solid #ccc;
}
.h-top {
  height: 44px;
  display: flex;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
}
.h-top span {
  height: 24px;
  width: 24px;
}
.h-top span img {
  height: 100%;
  width: 100%;
}
.h-top p {
  height: 28px;
  line-height: 28px;
  flex: 1;
  background: #ebebec url("../../assets/imgs/ss.png") no-repeat 10px center;
  background-size: 14px 14px;
  margin: 0 16px;
  color: #bdbdbd;
  font-size: 14px;
  padding-left: 32px;
}
.h-bottom {
  height: 40px;
  line-height: 40px;
}
.h-bottom ul {
  display: flex;
  overflow-x: auto;
  width: 100%;
}
.h-bottom ul li {
  flex-shrink: 0;
  margin: 0 12px;
  color: #a5adb5;
}
.h-bottom ul .active {
  color: #333;
}
.body {
  flex: 1;
  overflow-y: auto;
}
</style>
