<template>
  <div class="container">
    <div class="animals__header">
      <div class="animals__title">
        <h2>{{ title }}</h2>
        <a href="https://www.restplatzboerse.at" target="_blank">{{ link }}</a>
      </div>
      <h3 class="animals_subtitle">{{ subtitle }}</h3>
    </div>
    <AnimalsList />
  </div>
</template>

<script>
import AnimalsList from '../components/AnimalsList.vue';

export default {
  name: 'animals',
  data() {
    return {
      title: 'Zootiere',
      subtitle: 'Zufällige Auswahl an Zootieren',
      link: 'Alle',
    };
  },
  components: {
    AnimalsList,
  },
};
</script>

<style lang="scss" scoped>
.animals {
  &__title {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    > h2 {
      font-family: 'Quicksand', sans-serif;
      color: var(--color-title);
      font-size: 1.5rem;
    }
    > a {
      text-decoration: none;
      font-family: 'Open Sans', sans-serif;
      color: var(--color-title);
    }
  }
  &__subtitle {
    color: var(--color-subtitle);
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
  }
  &__header {
    margin: 136px 0 26px 0;
    padding: 0 16px 0 19px;
  }
}
.container {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
