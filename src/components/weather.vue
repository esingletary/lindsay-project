<template>
  <div>
    <v-container>
      <span class="weather-title">{{period.name}}</span>
      <br>
      <p class="temperature">{{period.temperature}}&#176;</p>
      <p class="forecast">{{period.detailedForecast}}</p>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Weather",
  data: () => ({}),
  props: {
    period: Object
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weather-title {
  font-weight: bold;
  font-size: 1.9em;
}
.temperature {
  font-weight: bolder;
  font-size: 3.75em;
  padding-top: 20px;
}
</style>