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
              <el-checkbox-group v-model="form.type" class='checkGroup'>
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class='activeInfo'>
        <div class='title'>
          <span class='titleBg'> <i class='el-icon-document'></i> 人员信息 <i class='arrow'></i> </span>
        </div>
        <div class='content'>
          <co-transfer></co-transfer>
          <div class='btnGroup'>
            <el-button type="primary">保存为草稿</el-button>
            <el-button type="primary">发布</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import coTransfer from '../common/Transfer'
import _ from 'lodash'

export default {
  name: 'addActive',
  data () {
    return {
      form: {}
    }
  },
  mounted () {
    console.dir(_.groupBy)
  },
  components: {
    coTransfer
  },
  methods: {
  }
}
</script>

<style lang='less' scoped>
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
        .checkGroup{}
      }
    }
    .btnGroup{
      margin-top:30px;
      text-align: center;
    }
  }
}
</style>
