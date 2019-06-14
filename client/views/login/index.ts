import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'
import axAxios from '../../axios'
import template from './index.vue'
import textFile from '../../components/inputtypeLine/textFile.ts'
import { Subject } from 'rxjs'
import { debounceTime } from 'rxjs/operators'

@Component({
  mixins: [template],
  components: {
    'text-file': textFile
  }
})
export default class login extends axAxios {
  searchInfo: object = {
    userName: '',
    passWord: ''
  };

  isTtermsService: boolean = true;
  selectChange: any = '';

  isSubmit: boolean = false;
  isReset: boolean = false;
  searchByInput: Subject<void> = new Subject();

  @Watch('searchInfo', { deep: true })
  isSearChInFo (val: any, oldVal: any) {
    if (val.userName && val.passWord && this.isTtermsService) this.isSubmit = true
    else this.isSubmit = false
    if (val.userName && val.passWord) this.isReset = true
    else this.isSubmit = false
  }

  mounted () {
    this.searchByInput
      .pipe(debounceTime(800)
      )
      .subscribe(term => {
      })
  }
  Submit () {
    this.apis$.post('/api/logIn', this.searchInfo).subscribe(
      (res: any) => {
        console.log(res)
      },
      (err: any) => {
      }
    )
  }
}
