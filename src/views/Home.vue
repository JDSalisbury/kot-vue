<template>
  <div class="home">
    <div v-if="!monsterState.submitted">
      <h1>Choose your monsters</h1>
      <div>
        <input
          type="checkbox"
          name="kitty"
          :id="6"
          :value="`Cyber Kitty`"
          @change="updateSelectedMonster"
        />
        <label for="kitty">Cyber Kitty</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="penguin"
          :id="5"
          :value="`Space Penguin`"
          @change="updateSelectedMonster"
        />
        <label for="penguin">Space Penguin</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="zaur"
          :id="4"
          :value="`Giga Zaur`"
          @change="updateSelectedMonster"
        />
        <label for="zaur">Giga Zaur</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="dragon"
          :id="3"
          :value="`Meka Dragon`"
          @change="updateSelectedMonster"
        />
        <label for="dragon">Meka Dragon</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="king"
          :id="2"
          :value="`The King`"
          @change="updateSelectedMonster"
        />
        <label for="king">The King</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="alienoid"
          :id="1"
          :value="`Alienoid`"
          @change="updateSelectedMonster"
        />
        <label for="alienoid">Alienoid</label>
      </div>
      <h2 v-if="monsterState.subError">{{ monsterState.subError }}</h2>
      <button @click="submitMonsters">BATTLE!</button>
    </div>
    <p>{{ monsterState.monsters }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
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
