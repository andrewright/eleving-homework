<template>
  <ul class='step-indicator'>
    <li :class='getStatus(`contact-info`)'>Personal info</li>
    <li :class='getStatus(`membership`)'>Membership</li>
    <li :class='getStatus(`overview`)'>Overview</li>
  </ul>
</template>
<script>
export default {
  computed: {
    loadUserData() {
      return this.$store.state.user;
    }
  },
  methods: {
    getStatus(step) {
      const active = step === this.$router.currentRoute.path.split('/')[2] && 'active';
      const done = 'firstName' in this.$store.state.user ? 'done' : 'membership' in this.$store.state.user ? 'done' : null
      return `${active} ${done}`;
    }
  }
}
</script>
<style lang="scss">
  .step-indicator {
    list-style: none;
    display: flex;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    counter-reset: step;
    padding: 0;
    margin: 0;

    li {
      position: relative;
      text-align: center;
      font-size: 1.5rem;
      flex-grow: 1;
      color: #C8D3DB;

      &.active, &.done {
        color: #394556;
        &:before {
          border-color: #15B0FC;
          color: #15B0FC
        }
        &:after {
          background-color: #15B0FC;
        }
      }

      &:before {
        content: counter(step);
        counter-increment: step;
        width: 80px;
        height: 80px;
        margin: 0 auto 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 3rem;
        font-weight: 700;
        border: 2px solid #C8D3DB;
        border-radius: 100%;
        background-color: #EBEBEB;
        position: relative;
        z-index: 10;
      }

      &:after {
        content: '';
        width: 100%;
        background-color: #C8D3DB;
        position: absolute;
        left: -50%;
        top: 40px;
        height: 2px;
        z-index: 2;
      }
      &:first-child:after {
        content: none;
      }
    }
  }
</style>
