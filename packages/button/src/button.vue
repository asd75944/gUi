<template>
  <button
    class="gui-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'gui-button--' + type : '',
      buttonSize ? 'gui-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
  >
    <i class="gui-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'GuiButton',

  inject: {
    guiForm: {
      default: ''
    },
    guiFormItem: {
      default: ''
    }
  },

  props: {
    type: {
      type: String,
      default: 'default'
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    icon: {
      type: String,
      default: ''
    },
    size: String,
    loading: Boolean,
    disabled: Boolean,
    autofocus: Boolean,
    plain: Boolean,
    round: Boolean,
    circle: Boolean
  },
  computed: {
    _guiFormItemSize() {
      return (this.guiFormItem || {}).guiFormItemSize
    },
    buttonSize() {
      return this.size || this._guiFormItemSize || (this.$ELEMENT || {}).size;
    },
    buttonDisabled() {
      return this.disabled || (this.guiForm || {}).disabled;
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
