<template>
  <div class='password-wrapper'>
    <el-form ref="form" :model="form" label-width="80px" class='form'>
      <el-form-item label="旧密码">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item style='text-align:center'>
       <el-button type='primary'>保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default{
  name: 'Ecp',
  data () {
    return {
      form: {}
    }
  }
}
</script>

<style lang='less' scoped>
  .password-wrapper{
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .form{

    }
  }
</style>
