<template>
  <q-page class="">
    <ads-filter />
    <!-- <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component> -->
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
// import ExampleComponent from 'components/CompositionComponent.vue';
import AdsFilter from 'components/AdsFilter.vue';
import { computed, defineComponent, ref } from 'vue';
import { useAds } from 'src/store/ads';
export default defineComponent({
  name: 'PageIndex',
  components: { AdsFilter },
  setup() {
    const $store = useAds();
    const ads = computed(() => $store.state.ads);

    const fetchAds = async () => {
      await $store.dispatch('fetchAds');
    };
    fetchAds().catch((error) => {
      console.log(error);
    });

    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1',
      },
      {
        id: 2,
        content: 'ct2',
      },
      {
        id: 3,
        content: 'ct3',
      },
      {
        id: 4,
        content: 'ct4',
      },
      {
        id: 5,
        content: 'ct5',
      },
    ]);
    const meta = ref<Meta>({
      totalCount: 1200,
    });
    return { todos, meta, ads };
  },
});
</script>

function useAds() { throw new Error('Function not implemented.'); } function
useAds() { throw new Error('Function not implemented.'); }
