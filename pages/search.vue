<template>
  <div>
    <div>{{ lat }} / {{ lng }} / {{ label }}</div>
    <div v-for="home in homes" :key="home.objectID">{{ home.title }}</div>
  </div>
</template>

<script>
export default {
  name: 'search.vue',
  watchQuery: ['lat'],
  async asyncData({ query, $dataApi }) {
    const data = await $dataApi.getHomesByLocation(query.lat, query.lng);
    return {
      homes: data.json.hits,
      label: query.label,
      lat: query.lat,
      lng: query.lng
    }
  }
};
</script>

<style scoped>

</style>
