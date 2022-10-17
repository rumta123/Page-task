<template>
  <div class="toplevel-cities" v-if="cities">
    <button
      type="button"
      class="toplevel-cities__button"
      @click="contentProcess"
    >
      <img
        src="img/sprites/location.svg"
        alt="Город"
        class="toplevel-cities__icon"
      />
      <span class="toplevel-cities__city"> {{ currentCityName }} </span>
    </button>
    <transition name="show-content">
      <div class="toplevel-cities__content" v-if="showContent">
        <span class="toplevel-cities__current-city">
          Ваш город {{ currentCityName }}
        </span>
        <div class="toplevel-cities__wrapper">
          <Input
            v-model="cityName"
            placeholder="Введите город"
            class="toplevel-cities__input"
          />
          <transition name="show-find-button">
            <button
              type="button"
              name="button"
              class="toplevel-cities__find-button"
              v-if="showSearchButton"
            >
              Найти
            </button>
          </transition>
        </div>
        <ul class="toplevel-cities__list" ref="list">
          <li
            class="toplevel-cities__item"
            v-for="(city, index) of items"
            :key="index"
            @click="setCurrentCity(city)"
          >
            <span
              class="toplevel-cities__item-name"
              :class="{
                'toplevel-cities__item-name--active':
                  city.name === currentCityName,
              }"
            >
              {{ city.name }}
            </span>
          </li>
        </ul>
        <span class="toplevel-cities__helper">
          Не нашли свой населенный пункт в списке? Воспользуйтесь
          <span class="toplevel-cities__helper-search">поиском</span>.
        </span>
      </div>
    </transition>
  </div>
</template>

<script>
import Input from '~/components/Input/Input.vue';
import { mapActions, mapState } from 'vuex';
import {
  FETCH_CITIES,
  FETCH_STATISTICS_BY_CODE,
} from '~/store/constants/actions';

export default {
  name: 'ToplevelCities',

  components: {
    Input,
  },

  computed: {
    ...mapState('cities', ['cities']),
    currentCityName() {
      return this.currentCity ? this.currentCity.name : null;
    },
    showSearchButton() {
      return this.cityName.length && !this.items.length;
    },
    items() {
      return this.cityName.length
        ? this.cities.filter((el) =>
            el.name.toLowerCase().includes(this.cityName.toLowerCase()),
          )
        : this.cities;
    },
  },

  data() {
    return {
      showContent: false,
      cityName: '',
      currentCity: null,
    };
  },

  methods: {
    ...mapActions('cities', [FETCH_CITIES]),
    ...mapActions('statistics', [FETCH_STATISTICS_BY_CODE]),
    contentProcess() {
      this.showContent = !this.showContent;
    },
    async setCurrentCity(city) {
      this.currentCity = city;
      this.FETCH_STATISTICS_BY_CODE(city.code);
      this.showContent = false;
    },
  },

  watch: {
    cityName() {
      this.$refs.list.style.height =
        Math.ceil(this.items.length / 3) * 34 + 'px';
    },
  },

  async mounted() {
    await this.FETCH_CITIES();
    if (this.cities) {
      this.currentCity = this.cities[0];
      this.FETCH_STATISTICS_BY_CODE(this.currentCity.code);
    }
  },
};
</script>

<style lang="scss">
@import './ToplevelCities.scss';
</style>
