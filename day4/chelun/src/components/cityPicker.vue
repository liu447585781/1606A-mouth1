<template>
    <div class="type">
      <ol>
        <li><div class="tk">
          <van-picker
          v-show="show"
          show-toolbar
          :columns="columns"
          @cancel="onCancel"
          @confirm="onConfirm"
        />
        </div>服务类型<span @click="btn1">{{val}} <i><img src="http://bpic.588ku.com/element_origin_min_pic/01/39/54/34573cc50a9516c.jpg" alt=""></i></span></li>
        <li>当前驾照签发城市 <em><img @click="box" src="https://h5.chelun.com/2017/update-licence2-pay/img/help.png" alt=""></em><span class="hui" @click="btn2">{{city.join(' ')}}</span></li>
        <li>可补换的签发城市 <em><img @click="box" src="https://h5.chelun.com/2017/update-licence2-pay/img/help.png" alt=""></em><span class="hui">请选择补换地</span></li>
        <li>服务费<span>￥399</span></li>
      </ol>
      <van-popup v-model="showCity" position="bottom">
        <van-picker :columns="cityColumns" show-toolbar title="选择签发城市"
          ref="cityPicker" @change="cityChange" @cancel="cityCancel" @confirm="cityConfirm"/>
      </van-popup>
      <Box  v-show="flag" v-on:shows='boxs'/>
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex';
import Box from './box'

export default {
  name: 'CityPicker',
  components:{
      Box
  },
  data(){
    return {
      show:false,
      flag:false,
      columns: ['补驾照', '换驾照'],
      val:'换驾照',
      showCity: false,
      showCost: false,
      cityColumns: []
    }
  },
  created(){
      this.getCityList().then(res=>{
          this.cityColumns = [
        {
          values: this.cityList.map(item=>item.name)
        },
        {
          values: this.cityList[0].list.map(item=>item.name)
        }
      ]
      })
  },
  computed:{
      ...mapState({
          cityList: state=>state.cityPicker.cityList,
          city:state=>state.cityPicker.city
      })
  },
  methods:{
    ...mapActions({
        getCityList:'cityPicker/getCityList',
        getCostList:'cityPicker/getCostList',
    }),
    ...mapMutations({
        updateState:'cityPicker/updateState'
    }),
    box(){
        this.flag=true;
    },
    boxs(data){
        this.flag=data;
    },
    btn1(){
      this.show=!this.show;
    },
    onConfirm(value, index) {
      this.val=value
      this.show=!this.show;
    },
    onCancel() {
      this.show=!this.show;
    },
    btn2(){
        this.showCity=!this.showCity;
    },
    cityCancel(){
        this.showCity=false;
    },
    cityConfirm(values){
        console.log(values)
        this.updateState({city:values})
        this.cityCancel()
    },
    cityChange(picker,values){
        let index=this.cityList.findIndex(item=>item.name==values[0]);
        this.$refs.cityPicker.setColumnValues(1,this.cityList[index].list.map(item=>item.name))
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
