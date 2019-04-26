<template>
  <div class="date px-2">
    <h1>
      {{getDay()}}
      <br>
      <h5>{{getMonth()}} {{getDate()}}, {{getYear()}}</h5>
    </h1>
  </div>
</template>

<script>
export default {
  name: "Date",
  data: () => ({
    date: new Date(),
    dayOfWeek: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    month: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  }),
  props: {},
  methods: {
    getDay: function() {
      let dString = this.dayOfWeek[this.date.getDay()];
      return dString;
    },
    getMonth: function() {
      let mString = this.month[this.date.getMonth()];
      return mString;
    },
    getDate: function() {
      let dNum = this.date.getDate();
      return dNum;
    },
    getYear: function() {
      let yString = this.date.getFullYear();
      return yString;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.date {
  width: 25%;
  min-width: 300px;
  text-align: left;
  font-size: 1.75em;
}
</style>
