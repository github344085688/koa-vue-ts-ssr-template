/**
 * Created by f on 2018/5/22.
 */
import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator';
import axAxios from '../../axios'
import template from './popupForDetermine.vue'
@Component({
  mixins: [template],
  name: 'popupForDetermine',
  components: {}
})
export default class PopupForDetermine extends axAxios {
  @Prop ({ default: false })
  show! : boolean;

  options: any = {};

  successBtn(event: any) {
    this.show = false;
    let node = document.querySelector('.autu-pop-up-win');
    if (node && node.parentNode) {
      node.parentNode.removeChild(node)
    }
  }

  cancelBtn (event: any): void {
    this.show = false
    console.log(event)

  }
}



