const state = {
  monsters: [],
};

const mutations = {
  addSelectedMonster(state, monster) {
    state.monsters.push(monster);
  },
  removeSelectedMonster(state, id) {
    state.monsters = state.monsters.filter((monster) => {
      return monster.id != id;
    });
  },
};

const actions = {
  updateSelectedMonster({ commit }, monster) {
    console.log("From Action", monster);
    if (monster.checked) {
      // monster checked, so we want to add this monster to our list of 'selectedmonsters'
      commit("addSelectedMonster", {
        id: monster.id,
        name: monster.value,
        order: 0,
        cards: [],
        pts: 0,
        atk: 0,
        hp: 0,
        gil: 0,
        record: [],
      });
    } else {
      // otherwise, remove the monster from our list
      commit("removeSelectedMonster", monster.id);
    }
  },
};

const getters = { selectedMonsters: (state) => state };

export default {
  state,
  getters,
  actions,
  mutations,
};
