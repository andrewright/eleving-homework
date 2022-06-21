<template>
  <b-container class='main-container'>
    <b-row>
      <b-col>
        <Header/>
      </b-col>
    </b-row>
    <b-row class='justify-content-center'>
      <b-col md='8' lg='6' xl='5' class='form-wrapper'>
        <Nuxt/>
      </b-col>
    </b-row>
    <pre>
      {{loadUserData}}
    </pre>
  </b-container>
</template>

<style lang="scss">
  .main-container {
    margin: 100px auto;
  }
  .form-wrapper {
    margin-top: 80px;
    padding: 2rem;
    border-radius: 1rem;
    background-color: var(--white);
    box-shadow: 0 3px 18px #00000029;
  }
</style>

<script>
export default {
  computed: {
    loadUserData() {
      return this.$store.state.user;
    }
  },
}
</script>
