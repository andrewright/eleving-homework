<template>
  <b-form-group :id='id' :label='label' :label-for='id'>
    <b-form-input
      :id='id'
      :type='type'
      :value='value'
      required
      @input='$emit(`input`, $event)'
    ></b-form-input>
  </b-form-group>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        required: true
      },
      required: {
        type: Boolean,
        default: false
      },
      id: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        default: null
      },
      type: {
        type: String,
        default: "text"
      },
    },
    data() {
      return {
        content: this.value
      }
    }
  }
</script>
