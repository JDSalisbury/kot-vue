<template>
  <div class="home">
    <h1>Choose your monsters</h1>
    <div>
      <input type="checkbox" id="kitty" name="kitty" />
      <label for="kitty">Cyber Kitty</label>
    </div>
    <div>
      <input type="checkbox" id="pengui" name="pengui" />
      <label for="pengui">Space Penguin</label>
    </div>
    <div>
      <input type="checkbox" id="zaur" name="zaur" />
      <label for="zaur">Giga Zaur</label>
    </div>
    <div>
      <input type="checkbox" id="dragon" name="dragon" />
      <label for="dragon">Meka Dragon</label>
    </div>
    <div>
      <input type="checkbox" id="king" name="king" />
      <label for="king">The King</label>
    </div>
    <button>Battle</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style lang="stylus">
ul
  list-style-type none
</style>
