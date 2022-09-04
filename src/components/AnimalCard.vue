<template>
  <div class="animal-card">
    <div
      role="img"
      :alt="getImageName()"
      class="animal-card__image"
      :style="{ backgroundImage: 'url(' + getImageUrl() + ')', backgroundSize }"
    ></div>

    <div class="animal-card__info row">
      <div class="animal-card__name">
        {{ animal.name }}
      </div>
      <div class="animal-card__weight">
        {{ `${weight}kg` }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'animalCard',
  props: ['animal'],
  methods: {
    getImageUrl() {
      return this.animal?.image_link;
    },
    getImageName() {
      return this.animal?.latin_name;
    },
  },
  computed: {
    backgroundSize() {
      const width = 287;
      let size = `${width}px auto`;
      return size;
    },
    weight() {
      return this.animal?.weight_max;
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  --color-green: #16828f;
  --color-bordeaux: #a11a79;
}

.animal-card {
  overflow: hidden;
  width: 287px;
  box-shadow: -2pt 2pt #d9e15f;
  border-radius: 10px;
  &__image {
    height: 177px;
    background-repeat: no-repeat;
    background-position: top;
  }
  &__name {
    align-self: center;
    padding-left: 13px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: calc(100% - 120px);
    color: var(--color-green);
  }
  &__weight {
    align-self: center;
    padding-right: 13px;
    color: var(--color-bordeaux);
  }
  &__info {
    height: 43px;
    justify-content: space-between;
  }
}
.row {
  display: flex;
}
</style>
