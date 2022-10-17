import { FETCH_CITIES } from '~/store/constants/actions';
import { SET_STATE_VALUE } from '~/store/constants/mutations';
import { citiesService } from '~/api';

const initialState = () => ({
  cities: null,
});

const state = initialState;

const mutations = {
  [SET_STATE_VALUE](state, value) {
    Object.assign(state, value);
  },
};

const actions = {
  async [FETCH_CITIES]({ commit }) {
    const cities = await citiesService.fetchCities();
    commit(SET_STATE_VALUE, { cities });
  },
};

export const cities = {
  namespaced: true,
  state,
  mutations,
  actions,
};
