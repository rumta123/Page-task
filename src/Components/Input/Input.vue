<template>
  <div class="input">
    <input
      type="text"
      :value="value"
      :placeholder="placeholder"
      class="input__field"
      @input="input"
    />
    <button
      type="button"
      class="input__button"
      @click="clearValue"
      v-if="value"
    >
      <img src="img/sprites/clear.svg" alt="clear" class="input__icon" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'Input',

  props: {
    value: {
      type: String,
    },
    placeholder: {
      type: String,
    },
  },

  methods: {
    input(e) {
      this.$emit('input', e.target.value);
    },
    clearValue() {
      this.$emit('input', '');
    },
  },
};
</script>

<style lang="scss">
@import './Input.scss';
</style>
