<template>
  <div>
    <h1>Membership</h1>
    <b-form @submit='onSubmit'>
      <b-form-group v-slot='{ ariaMembership}'>
        <b-form-radio v-model='membership' :aria-describedby='ariaMembership' name='membership' value='regular'>
          Regular
        </b-form-radio>
        <b-form-radio v-model='membership' :aria-describedby='ariaMembership' name='membership' value='premium'>
          Premium
        </b-form-radio>
      </b-form-group>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque urna, ligula eget maecenas. At pharetra
        fermentum augue egestas. Sed morbi sed est, ultrices in vel maecenas.</p>
      <b-button type='submit' variant='primary' size='lg' block>Continue</b-button>
      <b-button @click='$router.back()' variant='outline-primary' size='lg' class='mt-4' block>Back</b-button>
    </b-form>
  </div>
</template>

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
  data() {
    return {
      membership: 'regular'
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$store.commit('user/addMembership', this.membership);
      this.$router.push('/form/overview')
    }
  }
});
</script>
