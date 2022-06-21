<template>
  <div>
    <b-form @submit='onSubmit'>
      <h1>Overview</h1>
      <div class='overview-grid'>
        <strong>First name:</strong>
        <span>{{ loadUserData.user.firstName }}</span>
        <strong>Last name:</strong>
        <span>{{ loadUserData.user.lastName }}</span>
        <strong>Email:</strong>
        <span>{{ loadUserData.user.email }}</span>
        <strong>Membership:</strong>
        <span>{{ loadUserData.user.membership }}</span>
      </div>
      <div>
        <b-button v-b-modal.editInformation variant='link' class='my-5'>Edit information</b-button>
        <b-button type='submit' variant='primary' size='lg' block>Submit</b-button>
        <b-button @click='$router.back()' variant='outline-primary' size='lg' class='mt-4' block>Back</b-button>
      </div>
    </b-form>

    <b-modal id='editInformation' title='Edit information'>
      <p class='my-4'>
        wait some
      </p>
    </b-modal>
  </div>
</template>

<style>
.overview-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 40px;
}
</style>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'IndexPage',
  layout: "main",

  computed: {
    loadUserData() {
      return this.$store.state.user;
    }
  },

  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$store.commit('user/', this.membership);
    }
  }
});
</script>
