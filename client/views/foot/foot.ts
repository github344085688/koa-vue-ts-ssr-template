/**
 * Created by f on 2019/4/2.
 */
import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator';
import template from './foot.vue'
import axAxios from '../../axios'
// import { AsyncDataParams } from '../types/shims-asyncData'
@Component(
  {
    mixins: [template],
    components: {},
    title () {
      return 'Hello there i am getting this error:';
    }
  }
)
export default class Foot extends axAxios {
  // asyncData (params: AsyncDataParams) {
  //   return params.store.dispatch('getInfo')
  // }
  metaInfo: {
    title: 'BookTitle',
  }

  mounted(){

  }
  searchInfo: object = {
    userName: '',
    passWord: ''
  };

  Submit() {
    this.apis$.post('/api/logIn', this.searchInfo).subscribe(
      (res: any) => {
        console.log(res)
      },
      (err: any) => {
      }
    )
  };

  skd() {
    this.$errorAlert({
      title: '温馨提示',
      cancel: '取消',
      content: '<div v-if="options.content" class="content">{{options.content}}</div><div v-if="options.content" class="content">{{options.content}}</div><div v-if="options.content" class="content">{{options.content}}</div><div v-if="options.content" class="content">{{options.content}}</div><div v-if="options.content" class="content">{{options.content}}</div> ',
      confirm: '确定',
    }).then((ord: any) => {
      console.log(ord)
      // this.$forceUpdate();
    }).catch((err: any) => {
      console.log("error");
    })
  };
}
