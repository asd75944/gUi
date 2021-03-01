<template>
  <gui-button-group>
    <gui-button type="success" size="small" @click="handleClick">button</gui-button>
    <gui-button type="warning" @click="handleClick">button</gui-button>
    <gui-button type="primary" size="mini" @click="handleClick">button</gui-button>
  </gui-button-group>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log('click')
    }
  }
}
</script>
