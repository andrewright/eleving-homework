import { GetterTree, MutationTree } from 'vuex'
import { UserModel} from "~/model/User";

export const state = (): UserModel => ({
  user: {
    firstName: '',
    lastName: '',
    email: '',
    phones: [
      {
        type: 'work',
        number: ''
      }
    ]
  }
});

export const getter: GetterTree<UserModel, UserModel> = {
  getUserData(state: any) {
    return state.user;
  }
};

export const mutations: MutationTree<UserModel> = {
  change(state: UserModel, data: string) {
    state.user.firstName = data;
  },
  addMembership(state: UserModel, data: string) {
    state.user.membership = data;
  }
};
