<template>
  <div class="toplevel">
    <div class="toplevel__wrapper">
      <ToplevelCities />
    </div>
  </div>
</template>

<script>
import ToplevelCities from '~/components/ToplevelCities/ToplevelCities.vue';

export default {
  name: 'Toplevel',

  components: {
    ToplevelCities,
  },
};
</script>

<style lang="scss">
@import './Toplevel.scss';
</style>
