<template>
  <div class="settings">
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'settings',
  data () {
    return {
      msg: 'settings'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.settings {
  height: 100%;
}
.settings > div {
  font-size: 4em;
  height: 100%;
  line-height: 12;
}
</style>
