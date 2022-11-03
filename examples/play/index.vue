<template>
  <div>
    <gui-button type="primary" size="small" @click="handleClick">button</gui-button>
    <gui-button @click="handleClick">button</gui-button>
  </div>
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
