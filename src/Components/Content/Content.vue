<template>
  <div>
    <div class="content" v-show="statistics">
      <div class="content__wrapper">
        <h1 class="content__title">
          Рекламные возможности <span class="content__red">akson.ru</span>
        </h1>
        <h2 class="content__subtitle">Аудитория сайта</h2>
        <div class="content__graphics">
          <div class="content__item">
            <span class="content__name"> Посещаемость </span>
            <div class="content__item-wrapper">
              <canvas ref="attendance"></canvas>
              <div class="content__item-text">
                <div class="content__item-row">
                  <div class="content__item-head">
                    <img
                      src="img/eye.png"
                      alt="просмотры"
                      class="content__image"
                    />
                    <span class="content__text content__text--titled">
                      {{ total }}
                    </span>
                  </div>
                  <span class="content__text content__text--spaced">
                    Общее число просмотров <br />
                    страниц за 2021 год
                  </span>
                </div>
                <div>
                  <div class="content__item-head">
                    <img
                      src="img/eye.png"
                      alt="просмотры"
                      class="content__image"
                    />
                    <span class="content__text content__text--titled">{{
                      arg
                    }}</span>
                  </div>
                  <span class="content__text content__text--spaced">
                    Средняя ежемесячная <br />
                    посещаемость сайта по данным <br />
                    SimilarWeb за 2021 год
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="content__item">
            <span class="content__name"> Пол </span>
            <div class="content__item-wrapper">
              <canvas ref="gender"></canvas>
              <div class="content__item-text">
                <span class="content__text content__text--red">Мужской</span>
                <span class="content__text content__text--blue">Женский</span>
              </div>
            </div>
          </div>
          <div class="content__item">
            <span class="content__name"> Возраст </span>
            <div class="content__item-wrapper">
              <canvas ref="age"></canvas>
              <div class="content__item-text">
                <span class="content__text content__text--green"
                  >25-34 года</span
                >
                <span class="content__text content__text--yellow"
                  >35-44 года</span
                >
                <span class="content__text content__text--red">45-54 года</span>
                <span class="content__text content__text--blue"
                  >55 лет и старше</span
                >
                <span class="content__text content__text--violet"
                  >18-24 года</span
                >
                <span class="content__text content__text--grey">Остальные</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2 v-if="!statistics" class="fetch-info">Получение данных</h2>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import { mapState } from 'vuex';

export default {
  name: 'Content',

  computed: {
    ...mapState('statistics', ['statistics']),
    total() {
      return this.statistics ? this.statistics.attendance.total : null;
    },
    arg() {
      return this.statistics ? this.statistics.attendance.arg : null;
    },
  },

  watch: {
    statistics() {
      this.genderChart.data.datasets[0].data = this.statistics.gender;
      this.genderChart.update();
      this.ageChart.data.datasets[0].data = this.statistics.age;
      this.ageChart.update();
    },
  },

  data() {
    return {
      attendanceChart: null,
      genderChart: null,
      ageChart: null,
    };
  },

  mounted() {
    this.attendanceChart = new Chart(this.$refs.attendance.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['', '', '', ''],
        datasets: [
          {
            data: [10, 20, 30, 40],
            backgroundColor: ['#ffe083', '#fd7a64', '#dd6b73', '#da595e'],
            borderColor: ['#ffe083', '#fd7a64', '#dd6b73', '#da595e'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            display: false,
          },
        },
        events: null,
        responsive: true,
      },
    });
    this.genderChart = new Chart(this.$refs.gender.getContext('2d'), {
      type: 'pie',
      data: {
        datasets: [
          {
            data: null,
            backgroundColor: ['#77b6e7', '#cf2f36'],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        events: null,
        responsive: true,
      },
    });
    this.ageChart = new Chart(this.$refs.age.getContext('2d'), {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: null,
            backgroundColor: [
              '#81ae56',
              '#ffd963',
              '#cf2f36',
              '#77b6e7',
              '#a955b8',
              '#f3f1ed',
            ],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        events: null,
        responsive: true,
      },
    });
  },
};
</script>

<style lang="scss">
@import './Content.scss';
</style>
