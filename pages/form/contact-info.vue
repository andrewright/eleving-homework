<template>
  <div>
    <h1>Personal info</h1>
    <b-form @submit='onSubmit'>
      <FormInputText id='inputFirstName' v-model='form.firstName' label='First name' required @input="onChange" />
      <FormInputText id='inputLastName' v-model='form.lastName' label='Last name' required @input="onChange" />
      <FormInputText id='inputEmail' v-model='form.email' label='E-mail' required @input="onChange" />
      <WidgetAddPhones id='inputPhones' v-model='form.phones' :list='form.phones'/>
      <b-button type='submit' variant='primary' size="lg" block>Continue</b-button>
    </b-form>
    <pre>{{ form }}</pre>
  </div>
</template>


<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  layout: "main",

  data() {
    return {
      form: {
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
    };
  },

  computed: {
    phones() {
      return this.$store.state.user.phones
    }
  },
  methods: {
    onChange() {
      this.$store.commit('user/change', this.form);
    },
    onSubmit(event) {
      event.preventDefault();
      this.$store.commit('user/add', this.form);
      this.$router.push('/form/membership')
    }
  }
})
</script>
