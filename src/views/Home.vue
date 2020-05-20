<template>
  <div class="home">
    <MonsterList />
    <p>{{ monsterState.monsters }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    MonsterList: () => import("@/components/home/checkboxList.vue"),
  },
  created() {},
  methods: {},
  computed: {
    ...mapGetters(["monsterState"]),
  },
};
</script>

<style lang="stylus">
ul
  list-style-type none
</style>
