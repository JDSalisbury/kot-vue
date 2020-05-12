<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/kot-dice.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="stylus">
img
  width 20%
</style>
