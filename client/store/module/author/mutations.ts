import { MutationTree } from 'vuex'
import { State } from './state'
import { AUTHORS_SET_COLLECTION } from './type/mutation'

export default <MutationTree<State>> {
  [AUTHORS_SET_COLLECTION] (state: { [key: string]: any }, item: any) {
    state.collection = item
  }
}
