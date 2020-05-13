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
  updateSelectedMonster(context, monster) {
    if (monster.checked) {
      // monster checked, so we want to add this monster to our list of 'selectedmonsters'
      context.commit("addSelectedMonster", {
        id: monster.id,
        name: monster.value,
      });
    } else {
      // otherwise, remove the monster from our list
      context.commit("removeSelectedMonster", monster.id);
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
