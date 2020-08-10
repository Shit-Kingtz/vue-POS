<template>
  <div class="vip">
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'vip',
  data () {
    return {
      msg: 'vip'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vip {
  height: 100%;
}
.vip > div {
  font-size: 4em;
  height: 100%;
  line-height: 12;
}
</style>
