import * as types from '../mutationTypes'

const mutations = {
  [types.APP_INCREASE_LOADING_COUNTER](state) {
    state.loadingCounter += 1
  },
  [types.APP_DECREASE_LOADING_COUNTER](state) {
    state.loadingCounter -= 1
  }
}
