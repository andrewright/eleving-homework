<template>
  <div>
    <b-form-group :id='id' label='Phone:' :label-for='id'>
      <b-input-group>
        <b-input-group-prepend>
          <b-dropdown :text='getSelectedOption'>
            <b-dropdown-item
              v-for='option in options'
              :key='option.value'
              :value='option.value'
              @click='$emit(`input`, $event)'
            >{{ option.label }}
            </b-dropdown-item>
          </b-dropdown>
        </b-input-group-prepend>
        <b-input :id='id' input-mode='number' :value='number' type='text' @input='$emit(`input`, $event)'/>
        <b-input-group-append>
          <b-button variant='secondary' @click='deleteNumber'>Delete</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form-group>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    },
    number: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: {},
    };
  },
  computed: {
    getSelectedOption() {
      return this.options.find(item => item.value === this.$props.type).label;
    }
  },
  methods: {
    deleteNumber() {
      console.log('InputPhone.vue:56', 'deleteNumber');
    },
    handleDropdownChange(val) {
      console.log('InputPhone.vue:64', val);
      this.$emit('input', val);
    }
  }
};
</script>

<style>
  .custom-select {
    width: 100px;
    font-weight: bold;
    background-color: var(--secondary);
    border-radius: 0.5rem 0 0 .5rem;
  }
</style>
