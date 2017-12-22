<template>
  <el-dialog
    class='contact-dialog-import'
    :visible="isVisible"
    width="35%"
    title='导入'
    :close-on-click-modal='false'
    :before-close="handleClose">
    <div class='main'>
      <div class='title'>
        <span class='lf'>使用导入功能，可以快速批量添加多名人员</span> 
        <p class='rt'><span>下载</span> <a href="#" class='download'>导入模板</a></p>
      </div>
      <div>
        <span>上传导入文件</span><br>
        <label for="uploadFile" class='uploadBtn'>上传</label><input type="file" id='uploadFile' @change="getFile($event)" style='display:none'>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click='handleUpload($event)' :disabled="uploadOk">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default{
  name: 'dialogEdit',
  data () {
    return {
      isVisible: false,
      uploadOk: true // 当选择了文件以后让确定按钮可点击
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    },
    handleUpload () {
      let formData = new FormData()
      formData.append('file', this.file)
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      this.$http.post(this.uploadUrl, formData, config).then(res => {
        console.dir(res)
        this.$emit('refresh')
        this.handleClose()
      }).catch(err => {
        console.log('上传失败')
        console.dir(err)
      })
    },
    getFile (event) {
      this.file = event.target.files[0]
      if (this.file) {
        this.uploadOk = false
      } else {
        this.uploadOk = true
      }
    }
  },
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    uploadUrl: {
      type: String,
      required: true
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
.contact-dialog-import{
  .el-form-item{
    margin-bottom:0;
    .el-form-item__label{
      padding-bottom: 0;
    }
  }
  .main{
    .download{
      color:#108EE9;
    }
    .title{
      height:30px;
      margin-bottom: 20px;
    }
    .uploadWrapper{
      width:100%;
      &>div{
        width:100%;
      }
      .upload{
        width:100%;
        margin-top:10px;
      }
    }
    .uploadBtn{
      cursor: pointer;
      display: block;
      text-align: center;
      padding:4px;
      margin-top:10px;
      border-radius:5px;
      background:#409EFF;
      color:#fff;
    }
  }
}
</style>
