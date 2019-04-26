<template>
  <div id="app">
    <div>
      <Date/>
      <v-carousel class="weatherCard" :cycle="false" hide-controls>
        <v-carousel-item v-for="(period) in periods" :key="period.number">
          <Weather v-bind:period="period"/>
        </v-carousel-item>
      </v-carousel>
      <Quote :quote="quote"/>
    </div>
    <div class="planSection">
      <v-card style="height: 90%">
        <v-card-text>
        </v-card-text>
        <ToDo/>
      </v-card>
    </div>
  </div>
</template>

<script>
import Date from "./components/date";
import Weather from "./components/weather";
import Quote from "./components/quote";
import ToDo from "./components/todo";
import Horoscope from "./components/horoscope";

import WeatherService from './services/weather.service';
import QuoteService from './services/quote.service';


export default {
  name: "App",
  components: {
    Date,
    Weather,
    Quote,
    ToDo,
    Horoscope
  },
  data: function() {
    return {
      periods: [],
      quote: {},
    };
  },
  methods: {},
  mounted: async function() {
    let context = this;
    let weatherService = new WeatherService();
    let quoteService = new QuoteService();

    this.quote = await quoteService.getQuote();

    navigator.geolocation.getCurrentPosition(async function(location) {
      context.periods =  await weatherService.getWeather(
        `${location.coords.latitude},${location.coords.longitude}`
      );
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  margin-left: 40px;
  margin-right: 40px;
  display: flex;
}
.weatherCard {
  width: 25%;
  min-width: 300px;
  max-height: 330px;
  margin-top: 15px;
  margin-right: 0;
}
.planSection {
  position: absolute;
  transform: translateX(60%);
  width: 40%;
  height: 100%;
  margin: 15px;
}
</style>