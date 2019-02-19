import { Vue, Component } from 'vue-property-decorator'
import { AppUrls } from '@/utils/consts.ts'
import card from '@/components/card.vue'
import NewsList from '@/components/NewsList/index.vue' // mpvue目前只支持的单文件组件
import {mapState, mapActions} from 'vuex'

const debug = require('debug')('log:Index')


// 必须使用装饰器的方式来指定component
@Component({
  components: {
    NewsList,
    card
  },
  computed:{
    ...mapState({
      channels:state=>state['index'].channels,
      newsList:state=>state['index'].newsList
    })
  },
  methods:{
    ...mapActions({
      getSetting:'index/getSetting',
      getFeed:'index/getFeed',
      getMore:'index/getMore'
    })
  }
})

class Index extends Vue {

  ver: number = 123
  flag: number=0
  isRefresh: boolean = false

  onShow() { // 小程序 hook
    this['getSetting']().then(()=>{
      let appurl=this['channels'][0].appUrl;
      this['getFeed'](appurl)
    })
  }


  btn(index,url){
    this.flag=index;
    this['getFeed'](url)
    console.log(this['newList'])
  }

  // 上拉加载
  onReachBottom(){
    this.isRefresh = true;
    this.loadData();
  }

  refreshPage(){
    this.isRefresh=true;
    this.loadData();
  }

  loadData(){
    let appUrl=this['channels'][0].appUrl;
    console.log(appUrl)
    this['getMore'](appUrl).then(()=>{
    this.isRefresh=false;
    })
  }

}

export default Index
