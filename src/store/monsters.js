const state = {
  monsters: [],
  submitted: false,
  subError: "",
  playableMonsters: [
    { id: 6, name: `Cyber Kitty` },
    { id: 5, name: `Space Penguin` },
    { id: 4, name: `Giga Zaur` },
    { id: 3, name: `Meka Dragon` },
    { id: 2, name: `The King` },
    { id: 1, name: `Alienoid` },
  ],
  turnOrder: 1
};

const mutations = {
  addSelectedMonster(state, monster) {
    state.subError = "";
    state.monsters.push(monster);
  },
  removeSelectedMonster(state, id) {
    state.monsters = state.monsters.filter((monster) => {
      return monster.id != id;
    });
  },
  submitMonsterList(state) {
    state.submitted = true;
  },
  submitError(state) {
    state.subError = "Need More Monsters to Battle!";
  },
  updateMonster(state, monster) {
    console.log("Action magic", monster);
    // const result = state.submitMonsterList.find(({ monster.name }) => name === 'cherries');
    state.monsters = state.monsters.filter((mon) => {
      if (mon.id === monster.id && mon.order === 0) {
        mon.order = state.turnOrder;
        state.turnOrder++;
      }
      return true;
    });
    console.log(state.monsters);
  }
};

const actions = {
  updateSelectedMonster({ commit }, monster) {
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
        logs: [],
      });
    } else {
      // otherwise, remove the monster from our list
      commit("removeSelectedMonster", monster.id);
    }
  },
  submitMonsters({ commit }) {
    if (state.monsters.length >= 2) {
      commit("submitMonsterList");
    } else {
      commit("submitError");
    }
  },
  updateMonsterOrder({ commit }, monster) {
    commit("updateMonster", monster)
  }
};

const getters = {
  monsterState: (state) => state,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
