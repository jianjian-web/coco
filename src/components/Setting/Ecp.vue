<template>
  <div class='Ecp-wrapper'>
    <div class='ecp'>
      <label for="ecp" class='label'>Ecp</label><el-input id='ecp'></el-input>
    </div>
  </div>
</template>

<script>
export default{
  name: 'Ecp',
  data () {
    return {}
  }
}
</script>

<style lang='less' scoped>
  .Ecp-wrapper{
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .ecp{
      display: flex;
      align-items: center;
    }
    .label{
      margin-right:15px;
    }
  }
</style>
