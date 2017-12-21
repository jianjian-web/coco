<template>
  <el-dialog
    :title="type === 'edit' ? '编辑联系人':'添加联系人'"
    class='contact-dialog-edit'
    :visible="isVisible"
    width="40%"
    :close-on-click-modal='false'
    :before-close="handleClose">
    <div>
      <el-form label-position="top" ref="editForm" :model="formData" :rules="rules">
        <el-row>
          <el-col :span='11' >
            <el-form-item label="名称" prop='name'>
              <el-input v-model="formData.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span='11' :offset='2'>
            <el-form-item label="公司名称">
              <el-input v-model="formData.company"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span='11' >
            <el-form-item label="手机号码" prop='telphone'>
              <el-input v-model="formData.telphone"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span='11' :offset='2'>
            <el-form-item label="邮箱">
              <el-input v-model="formData.email"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span='11' >
            <el-form-item label="标签">
              <el-select
                v-model="formData.tagList"
                multiple
                filterable
                allow-create
                placeholder="请选择文章标签">
                <el-option
                  v-for="item in tags"
                  :key="item"
                  :label="item"
                  :value="item">
                </el-option>
                <!-- <el-option :value="addTag" @click.stop='handleAddTags'> -->
                  <p style='text-align:center;cursor:pointer' @click='handleAddTags'>新增标签</p>
                <!-- </el-option> -->
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="submitForm('editForm')">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default{
  name: 'dialogEdit',
  data () {
    return {
      isVisible: false,
      formData: {},
      addTag: '',
      rules: {
        name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
        telphone: [{ required: true, message: '请输入手机号码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) { // 新增联系人
          console.log(this.type)
          if (this.type === 'add') {
            this.$http.post('/contact', {
              params: this.formData
            }).then(res => {
              console.dir(res)
              this.$emit('refresh')
              this.handleClose()
            }).catch(err => {
              console.log('新增联系人失败')
              console.dir(err)
            })
          } else {
            this.$http.put(`/contact/${this.formData.id}`, {
              params: this.formData
            }).then(res => {
              this.$emit('refresh')
              this.handleClose()
            }).catch(err => {
              console.log('修改联系人信息失败')
              console.dir(err)
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleAddTags (e) {
      // e.stopPropagation()
      console.dir('addTags')
    }
  },
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: {}
    },
    type: {
      type: String,
      default: '',
      required: true
    },
    tags: {
      type: Array,
      default: []
    }
  },
  watch: {
    dialogVisible (v) {
      this.isVisible = v
      // if (!v) {
      //   setTimeout(() => {
      //     this.$destroy()
      //   }, 100)
      // }
    },
    data (v) {
      if (this.type === 'add') return
      console.log('change')
      this.formData = Object.assign({}, v)
      // this.tagOptions = v.tagList
    }
  }
}
</script>

<style lang='less'>
.contact-dialog-edit{
  .el-form-item{
    margin-bottom:0;
    .el-form-item__label{
      padding-bottom: 0;
    }
  }
}
</style>
