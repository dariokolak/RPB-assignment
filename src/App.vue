<template>
  <Animals />
</template>

<script>
import Animals from './pages/Animals';

export default {
  name: 'App',
  components: {
    Animals,
  },
};
</script>

<style lang="scss">
* {
  --color-title: #16828f;
  --color-green: #16828f;
  --color-bordeaux: #a11a79;
  --color-yellow: #d9e15f;
  --color-subtitle: #525252;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  font: inherit;
}
</style>
