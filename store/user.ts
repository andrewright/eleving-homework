import { GetterTree, MutationTree } from 'vuex'
import { IPhoneType, UserModel } from "~/model/User";

export const state = (): UserModel => ({
  user: {
    firstName: '',
    lastName: '',
    email: '',
    membership: '',
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
  change(state: UserModel, data: any) {
    state.user = {...data};
  },
  changePhone(state: UserModel, data: any) {
    const phoneIndex = state.user.phones.findIndex(item => item.type === data.type);
    state.user.phones[phoneIndex].number = data.number
  },
  addPhone(state: UserModel, data: IPhoneType[]) {
    const phoneTypeToAdd = data.filter(item => state.user.phones.every(phone => phone.type !== item));
    if (phoneTypeToAdd.length > 0) {
      state.user.phones.push({
        type: phoneTypeToAdd[0],
        number: ''
      });
    }
  },
  addMembership(state: UserModel, data: string) {
    state.user.membership = data;
  }
};
