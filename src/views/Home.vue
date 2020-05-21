<template>
  <div class="home">
    <MonsterList v-if="!monsterState.submitted" />
    <OrderMonsters v-if="monsterState.submitted" />
    <ul>
      <li v-for="mon in monsterState.monsters" :key="mon.name">
        {{ mon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    MonsterList: () => import("@/components/home/checkboxList.vue"),
    OrderMonsters: () => import("@/components/home/orderList.vue"),
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
