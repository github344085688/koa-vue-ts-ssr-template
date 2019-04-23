import { State } from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
export const author = {
  state: new State(),
  actions: actions,
  mutations: mutations,
  getters: getters
};
