<template>
  <el-dialog
    class='team-dialog-add'
    :visible="isVisible"
    width="35%"
    title='添加人员'
    :close-on-click-modal='false'
    :before-close="handleClose">
    <div class='main'>
      <el-form ref='addForm' label-position="top" :model="formData" :rules="rules">
        <el-form-item label="姓名" prop='nickname'>
          <el-input v-model="formData.nickname"></el-input>
        </el-form-item>
        <el-form-item label="手机号码/固话" prop='phone'>
          <el-input v-model="formData.phone"></el-input>
        </el-form-item>
        <el-form-item label="密码(最大长度10位字符)" prop='password'>
          <el-input v-model="formData.password" type='password'></el-input>
        </el-form-item>
      </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click='submitForm("addForm")'>确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import curd from '../../mixin/curd'
export default{
  name: 'dialogEdit',
  mixins: [curd],
  data () {
    return {
      isVisible: false,
      uploadOk: true, // 当选择了文件以后让确定按钮可点击
      formData: {},
      rules: {
        nickname: [{ required: true, message: '请输入名称', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入手机号码', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 10, message: '请输入6~10位字符', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.dir(this.formData)
          this.$_addOne('member', this.formData)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    dialogVisible (v) {
      this.isVisible = v
    }
  }
}
</script>

<style lang='less'>
.team-dialog-add{
  .el-form-item{
    margin-bottom:0;
    .el-form-item__label{
      padding-bottom: 0;
    }
  }
  .main{

  }
}
</style>
