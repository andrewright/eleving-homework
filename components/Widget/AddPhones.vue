<template>
  <div>
    <FormInputPhone v-for="phone of list" :id='id' :key='phone.type' :type='phone.type' :number='phone.number' :options='options' @input='changePhoneType'/>
    <b-button variant="link" @click='addPhone'>Add phone</b-button>
  </div>
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        required: true
      },
      list: {
        type: Array,
        required: true
      },
    },
    data() {
      return {
        options: [
          {value: 'work', label: 'Work'},
          {value: 'home', label: 'Home'},
          {value: 'mobile', label: 'Mobile'},
          {value: 'main', label: 'Main'},
          {value: 'other', label: 'Other'},
        ]
      }
    },
    computed: {
      loadUserData() {
        return this.$store.state.user;
      },
    },
    methods: {
      changePhoneType(e) {
        console.log('AddPhones.vue:38', e);
      },
      addPhone() {
        this.$store.commit('user/addPhone', this.$props.list);
      }
    }
  }
</script>
