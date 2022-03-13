<template>
  <div class="row">
    <div
      id="parent"
      class="fit row wrap justify-start items-center content-start"
      style="overflow: hidden"
    >
      <q-select
        label="בחר יצרן"
        filled
        v-model="selectedManufacurer"
        multiple
        :options="options"
        counter
        max-values="4"
        hint="ניתן לבחור עד 4 יצרנים"
        style="width: 250px"
        emit-value
        map-options
        @update:model-value="onSelectChange"
      />
      <q-btn @click="fetchAds" class="col-auto" color="primary" label="חפש" />
    </div>
  </div>
</template>

<script lang="ts">
import { useSearchOptions } from 'src/store/search-options';
import { computed, defineComponent, ref } from 'vue';

interface Manufacturer {
  id: string;
  name: string;
}

interface Manufacturer {
  foo: string;
  bar: number;
}

export default defineComponent({
  name: 'AdsFilter',
  setup() {
    const data = ref(null);
    const $store = useSearchOptions();
    const options = computed(() => $store.state.manufacturers);
    const fetchSearchOptions = async () => {
      await $store.dispatch('fetchSearchOptions');
    };
    const manufacturers = ref<Manufacturer[]>([]);
    const selectedManufacurer = ref(null);
    const onSelectChange = (selected: string[]) => {
      console.log(selected);
    };

    fetchSearchOptions().catch((e) => {
      console.log(e);
    });

    const fetchAds = () => {
      // $store.dispatch('fetchAds');
    };

    return {
      data,
      options,
      manufacturers,
      selectedManufacurer,
      onSelectChange,
      fetchAds,
    };
  },
});
</script>
<style scoped></style>
