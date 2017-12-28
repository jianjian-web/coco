<template>
  <div class='addActive'>
    <div class='activeContainer'>
      <div class='activeInfo'>
        <div class='title'>
          <span class='titleBg'> <i class='el-icon-document'></i> 活动消息 <i class='arrow'></i> </span>
        </div>
        <div class='content'>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动性质">
              <div class='checkGroup'>
                  <el-input type="textarea" :rows="2" placeholder="请输入，内容以换行隔开" v-model="textarea" @change='handleTextareaChange'></el-input>
                  <!-- <el-input v-model="addCheckboxValue" @change='handleAddChange' v-if='showInput' style='width:100px;' class='el-checkbox__label'></el-input>
                  <p v-else class='checkbox-add el-checkbox__label el-icon-circle-plus-outline' @click='handleAdd'>添加</p> -->
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class='activeInfo'>
        <div class='title'>
          <span class='titleBg'> <i class='el-icon-document'></i> 人员信息 <i class='arrow'></i> </span>
        </div>
        <div class='content'>
          <co-transfer @submit='handleSubmit'></co-transfer><!--穿梭框-->
          <!-- <div class='btnGroup'>
            <el-button type="primary">保存为草稿</el-button>
            <el-button type="primary">发布</el-button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import coTransfer from './Transfer'
// import _ from 'lodash'
import {mapState, mapMutations} from 'vuex'
import {SET_ACTIVE_DATA} from '../../store/mutation-types'

export default {
  name: 'addActive',
  data () {
    return {
      form: {
      },
      textarea: ''
    }
  },
  created () {
    // console.dir(this.activeRowData)
    if (this.activeRowData) {
      this.form = this.activeRowData
      const ops = this.activeRowData.options.map(item => {
        return item.label
      })
      this.textarea = ops.join('\n')
    } else {
      this.form = {
        name: '',
        options: [],
        contacts: []
      }
    }
  },
  components: {
    coTransfer
  },
  computed: {
    ...mapState([
      'activeRowData'
    ])
  },
  methods: {
    ...mapMutations([
      SET_ACTIVE_DATA
    ]),
    handleTextareaChange (v) {
      const textArr = v.split('\n')
      const arr = textArr.map((item, index) => {
        return {label: item, value: index}
      })
      this.form.options = Object.assign([], arr)
    },
    handleSubmit (v) { // 保存
      this.form.contacts = Object.assign([], v.data)
      if (v.type === 'save') {
        console.log('保存')
        console.dir(this.form)
        this.$http.post('activity', {
          params: this.form
        }).then(res => {
          if (res) {
            this.$router.push({path: '/active'})
          }
        })
      } else {
        // console.log('草稿')
        this.$http.post('activity-draft', {
          params: this.form
        }).then(res => {
          if (res) {
            this.$router.push({path: '/active'})
          }
        })
      }
    }
  }
}
</script>

<style lang='less'>
.addActive{
  height: calc(~"100% - 20px");
  .activeContainer{
    // border:1px solid red;
    width:1000px;
    height:100%;
    // border:1px solid red;
    overflow: auto;
    margin:0 auto;
    margin-top:20px;
    &::before{
      display: table;
      content:''
    }
    .activeInfo{
      display: flex;
      .title{
        flex:1;
        .titleBg{
          position: relative;
          display: inline-block;
          background:#9EA7B4;
          padding:10px 30px 11px 30px;
          color:#fff;
          .arrow{
            position: absolute;
            right:-14px;
            top:6px;
            width: 0px;
            height: 0px;
            border-color:transparent #9EA7B4 #9EA7B4 transparent;
            border-width:14px;
            border-style: solid;
            transform: rotate(-45deg)
          }
        }
      }
      .content{
        flex:3;
        .checkGroup{
          display: flex;
          flex-wrap: wrap;
          .el-checkbox{
            margin-left:0!important;
            margin-right:30px!important;
          }
          .checkbox-add{
            line-height: 40px;
            cursor: pointer;
          }
        }
      }
    }
    .btnGroup{
      margin-top:30px;
      text-align: center;
    }
  }
}
</style>
