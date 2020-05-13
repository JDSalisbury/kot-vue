<template>
  <div class="home">
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
    <p>{{ selectedMonsters.monsters }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {},
  created() {},
  methods: {
    updateSelectedMonster(e) {
      // https://stackoverflow.com/questions/42686388/how-to-bind-checkboxes-to-vuex-store
      this.$store.dispatch("updateSelectedMonster", e.target);
    },
  },
  computed: {
    ...mapGetters(["selectedMonsters"]),
  },
};
</script>

<style lang="stylus">
ul
  list-style-type none
</style>
