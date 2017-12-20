<template>
  <div class='detailsItemMini'>
    <span class='name' v-text='title'></span>
    <div>
      <span class='number' v-text='number'></span> <span class='unit' v-text='unit'></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailsItemMini',
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    number: {
      type: String,
      default: ''
    },
    unit: {
      type: String,
      default: '个'
    }
  }
}
</script>

<style lang='less' scoped>
.detailsItemMini{
  border-radius: 5px;
  flex:1;
  padding:10px 30px;
  height:120px;
  border:1px solid #EBEBEB;
  margin-right:20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .name{
    color:#666;
    margin-bottom:10px;
  }
  .unit{
    font-size: 1.2em;
  }
  .number{
    font-size: 1.5em;
  }
}
</style>
