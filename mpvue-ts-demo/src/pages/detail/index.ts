import { Vue, Component } from 'vue-property-decorator'
import {mapState, mapActions} from 'vuex'
import {formatTime} from '@/utils/index'

// 必须使用装饰器的方式来指定component
@Component({
  computed: {
    ...mapState({
      content: state=>state['detail'].content,
      info: state=>state['detail'].info,
      comment: state=>state['detail'].comment
    })
  },
  methods: {
    ...mapActions({
      getDetail: 'detail/getDetail',
      getComments: 'detail/getComments'
    })
  }
})
class Detail extends Vue {
  msg: string = 'detail'
  placeholder: string = '写评论'
  isCollection: boolean = false
  fontSize: number = 18
  page: number = 1

  // 格式化内容
  get formatContent(){
    return this['content'].map(item=>{
      if (typeof item == 'string'){
        return {
          type: 'text',
          content: item
        }
      }else{
        return item
      }
    })
  }

    // 格式化评论时间
    get formatComment(){
      let comment = [...this['comment']];
      console.log(comment === this['comment'])
      return comment.map(item=>{
        item.comment.create_time = formatTime(new Date(item.comment.create_time*1000));
        return item;
      })
    }

  // 格式化时间
  get publishTime(){
    let date = new Date(this['info'].publish_time*1000);
    let month = date.getMonth()+1,
        day = date.getDate(),
        hour = date.getHours(),
        min = date.getMinutes();
    return `${month}-${day} ${hour}:${min}`;
  }

  onShow(){
    this['getDetail'](this.$root.$mp.query.id)
    this['getComments']({id:this.$root.$mp.query.id, page:this.page})
  }

  onReachBottom(){
    this.page++;
    this['getComments']({id:this.$root.$mp.query.id, page:this.page})
  }
}

export default Detail
