<template>
  <div class="quoteContain">
    <p class="quote">"{{quote.quote}}"</p>
    <p>- {{quote.author}}</p>
  </div>
</template>

<script>
export default {
  name: "Quote",
  data: () => ({}),
  props: {
    quote: Object
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quoteContain {
  width: 25%;
  min-width: 300px;
}
.quote {
  margin-top: 10px;
  font-weight: 600;
  font-size: 1.2em;
}
</style>