<template>
  <div>
    <header>
      <Toplevel />
      <HeaderMenu />
    </header>
    <main>
      <Content />
    </main>
  </div>
</template>

<script>
import Toplevel from '~/components/Toplevel/Toplevel.vue';
import HeaderMenu from '~/components/HeaderMenu/HeaderMenu.vue';
import Content from '~/components/Content/Content.vue';

export default {
  name: 'App',

  components: {
    Toplevel,
    HeaderMenu,
    Content,
  },
};
</script>
