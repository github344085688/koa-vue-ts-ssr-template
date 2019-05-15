import { ActionTree, ActionContext } from 'vuex'
import { State } from './state'
import { GET_IN_FO } from './type/action'
import { AUTHORS_SET_COLLECTION } from './type/mutation'
import rxax from '../../../axios/rxToaxios'
export default <ActionTree<State, any>> {
  async  [GET_IN_FO] ({ commit, rootState }: ActionContext<State, any>) {
    commit(AUTHORS_SET_COLLECTION, [await new Promise((resolve, reject) => {
      rxax.post('/newList-select-by-paging', {
        'col01': '76',
        'col02': '76'
      }).subscribe(
        (res: any) => {
          resolve(res);
        },
        (err: any) => {
          reject(err)
        }
      )
    })])
  }
}
