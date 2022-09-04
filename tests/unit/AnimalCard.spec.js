import { mount } from '@vue/test-utils';
import AnimalCard from '@/components/AnimalCard.vue';

test('displaysName', () => {
  const card = mount(AnimalCard, {
    props: {
      animal: {
        name: 'Crow',
        weight_max: 3,
        image_link: '',
      },
    },
  });

  const name = card.find('.animal-card__name');
  const weight = card.find('.animal-card__weight');
  expect(name.text()).toBe('Crow');
  expect(weight.text()).toBe('3kg');
});
