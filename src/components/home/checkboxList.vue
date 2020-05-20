<template>
  <div>
    <div>
      <h1>Choose your monsters</h1>
      <div v-for="mon in monsterState.playableMonsters" :key="mon.id">
        <input
          type="checkbox"
          :id="mon.id"
          :value="mon.name"
          @change="updateSelectedMonster"
        />
        <label>{{ mon.name }}</label>
      </div>

      <h2 v-if="monsterState.subError">{{ monsterState.subError }}</h2>
      <button @click="submitMonsters">BATTLE!</button>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CheckList",
  components: {},
  created() {},
  methods: {
    ...mapActions(["updateSelectedMonster", "submit"]),

    updateSelectedMonster(e) {
      // https://stackoverflow.com/questions/42686388/how-to-bind-checkboxes-to-vuex-store
      this.$store.dispatch("updateSelectedMonster", e.target);
    },

    submitMonsters() {
      this.$store.dispatch("submitMonsters");
    },
  },
  computed: {
    ...mapGetters(["monsterState"]),
  },
};
</script>

<style lang="stylus">
ul
  list-style-type none
</style>
