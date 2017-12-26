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
                <el-input type="text" v-model='tagName' v-if='showInput' @change='handleInputChange'/>
                <el-option style='text-align:center;cursor:pointer' value='false' v-if='!tags.length'>
                  <p @click.stop='handleAddTags' style='margin:0 -20px;'>新增标签<span class='el-icon-edit'></span></p>
                </el-option>
                <p style='text-align:center;cursor:pointer;' @click.stop='handleAddTags' v-else>新增标签<span class='el-icon-edit'></span></p>
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
import curd from '../../mixin/curd'
export default{
  name: 'dialogEdit',
  mixins: [curd],
  data () {
    return {
      showInput: false,
      tagName: '',
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
            this.$_addOne('contact', this.formData)
          } else {
            this.$_Update('contact', this.formData.id, this.formData)
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleAddTags (e) {
      console.dir('addTags')
      this.showInput = true
    },
    handleInputChange (v) {
      console.log('change')
      this.formData.tagList.push(v)
      this.showInput = false
      this.tagName = ''
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
