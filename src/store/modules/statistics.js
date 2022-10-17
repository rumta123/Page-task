import { FETCH_STATISTICS_BY_CODE } from '~/store/constants/actions';
import { SET_STATE_VALUE } from '~/store/constants/mutations';
import { statisticsService } from '~/api';

const initialState = () => ({
  statistics: null,
});

const state = initialState;

const mutations = {
  [SET_STATE_VALUE](model, value) {
    Object.assign(model, value);
  },
};

const actions = {
  async [FETCH_STATISTICS_BY_CODE]({ commit }, code) {
    const statistics = await statisticsService.getStatisticsByCode(code);
    commit(SET_STATE_VALUE, { statistics });
  },
};

export const statistics = {
  namespaced: true,
  state,
  mutations,
  actions,
};
