export const state = () => ({
  user: {
    phones: []
  }
});

export const getter = {
  getUserData(state) {
    return state.user;
  }
};

export const mutations = {
  add(state, data) {
    state.user = {...data};
  },
  addMembership(state, data) {
    state.user.membership = data;
  }
};
