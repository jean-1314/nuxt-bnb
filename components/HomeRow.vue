<template>
  <div style="clear:left">
    {{ home.title }}<br/>
    <img :src="home.images[0]" :alt="home.title" style="width: 200px; float: left; padding: 10px;"><br/>
    {{ home.location.address }} {{ home.location.city }} {{ home.location.state }}<br/>
    {{ pluralize(home.guests, "guest") }},
    {{ pluralize(home.bedrooms, "room") }},
    {{ pluralize(home.beds, "bed") }},
    {{ pluralize(home.bathrooms, "bathroom") }}<br/>
    {{ home.pricePerNight }} / night<br/>
    <img src="/images/star.svg" width="20" height="20"/>{{ home.reviewValue}} ({{ home.reviewCount }})<br/>
  </div>
</template>

<script>
  export default {
    name: 'HomeRow',
    props: {
      home: {
        type: Object,
        default: () => {},
        required: true
      },
    },
    methods: {
      pluralize(number, singularWord) {
        const text = `${number} ${singularWord}`;
        if (number === 1) {
          return text;
        }
        return `${text}s`;
      }
    }
  };
</script>

<style scoped>

</style>
