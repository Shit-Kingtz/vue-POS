<template>
  <div class="goods">
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'goods',
  data () {
    return {
      msg: 'goods'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goods {
  height: 100%;
}
.goods > div {
  font-size: 4em;
  height: 100%;
  line-height: 12;
}
</style>
