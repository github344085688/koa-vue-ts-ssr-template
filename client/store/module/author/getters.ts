import { GetterTree } from 'vuex'
import { State } from './state'
import { AUTHOR_GET_COLLECTION } from './type/getter'

export default <GetterTree<State, any>> {
  [AUTHOR_GET_COLLECTION] (state: State): { [key: string]: any }[] {
    return state.collection;
  }
}
