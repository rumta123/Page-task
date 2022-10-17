<template functional>
  <div class="header-menu">
    <div class="header-menu__wrapper">
      <div class="header-menu__item">
        <img src="img/sprites/fire.svg" alt="Акции" class="header-menu__icon" />
        <a href="#" class="header-menu__link header-menu__link--hot"> Акции </a>
      </div>
      <div class="header-menu__item">
        <a href="#" class="header-menu__link"> Строительные материалы </a>
      </div>
      <div class="header-menu__item">
        <a href="#" class="header-menu__link"> Краски </a>
      </div>
      <div class="header-menu__item">
        <a href="#" class="header-menu__link"> Сантехника </a>
      </div>
      <div class="header-menu__item">
        <a href="#" class="header-menu__link"> Керамическая плитка </a>
      </div>
      <div class="header-menu__item">
        <a href="#" class="header-menu__link"> Товары для дома </a>
      </div>
      <div class="header-menu__item">
        <a href="#" class="header-menu__link"> Сад и огород </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderMenu',
};
</script>

<style lang="scss">
@import './HeaderMenu.scss';
</style>
