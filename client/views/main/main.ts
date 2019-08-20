/**
 * Created by f on 2019/4/2.
 */
import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator';
import template from './main.vue'
import axAxios from '../../axios'
import { AsyncDataParams } from '../../../types/shims-asyncData'
import { GET_IN_FO } from '../../store/module/author/type/action'
import { mapGetters } from 'vuex'
import { AUTHOR_GET_COLLECTION } from '../../store/module/author/type/getter'
@Component(
  {
    mixins: [template],
    components: {},
    title () {
      return this.title;
    },
    asyncData (params: AsyncDataParams) {
      return params.store.dispatch(GET_IN_FO)
    },
    computed: mapGetters({
      authors: AUTHOR_GET_COLLECTION
    })

  }
)
export default class Main extends axAxios {
  title:string= 'BookTitle';

  constructor() {
    super()
  }

  mounted() {

  }
//recommended lp
  item() {
    return this.$store.state
  }

  searchInfo: object = {
    userName: '',
    passWord: ''
  };

  async Submit() {
    let searchInfo = await new Promise((resolve, reject) => {
      try {
        this.apis$.post('/newList-select-by-paging', {
          'col01': '76',
          'col02': '76',
          'col05': '76'
        }).subscribe(
          (res: any) => {
            resolve(res);
          },
          (err: any) => {
            reject(err)
          }
        )
      } catch (e) {
        reject(e)
      }
    })
    console.log(searchInfo ? searchInfo : 'ssss')
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
