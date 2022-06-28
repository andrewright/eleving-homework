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
      <b-button variant='outline-primary' size='lg' class='mt-4' block @click='$router.back()'>Back</b-button>
    </b-form>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'IndexPage',
  layout: "main",
  data() {
    return {
      membership: 'regular'
    };
  },
  computed: {
    loadUserData() {
      return this.$store.state.user;
    }
  },
  methods: {
    onChange() {
      console.log('membership.vue:39', 'change');
      this.$store.commit('user/addMembership', this.membership);
    },
    onSubmit(event) {
      event.preventDefault();
      this.$router.push('/form/overview')
    }
  }
});
</script>
