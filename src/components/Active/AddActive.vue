<template>
  <div class='addActive1'>
    <div class='steps'>
      <el-steps :active="active" finish-status="success" align-center>
        <el-step title="填写基本信息"></el-step>
        <el-step title="设计问卷"></el-step>
        <el-step title="导入联系人"></el-step>
      </el-steps>
      <div class='activeContainer'>
        <div class='activeTitle'>
          <span class='el-icon-edit'></span> <span>基本信息</span><span class='el-icon-caret-right'></span>
        </div>
        <!-- <transition enter-active-class='animated bounceInRight' leave-active-class="animated bounceOutLeft" mode='out-in'> -->
          <!-- step1 -->
          <div class='activeBody' v-if='active === 1' key='step1'>
            <el-form ref="form" :model="formData1" label-width="150px">
              <el-form-item label="活动名称" >
                <el-input v-model="formData1.name" style='width:100%'></el-input>
              </el-form-item>

              <el-form-item label="活动类型" >
                <el-input v-model="formData1.type" style='width:100%'></el-input>
              </el-form-item>

              <el-form-item label="活动内容描述">
                <el-input type="textarea" v-model="formData1.content" placeholder="请输入内容" :rows="4"></el-input>
              </el-form-item>

              <el-form-item label="活动起始时间">
                <el-col :span="11">
                  <el-date-picker type="datetime" placeholder="开始时间" v-model="formData1.startTime" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col style='text-align:center' :span="2">-</el-col>
                <el-col :span="11">
                  <el-date-picker type="datetime" placeholder="结束时间" v-model="formData1.endTime" style="width: 100%;"></el-date-picker>
                </el-col>
              </el-form-item>

              <el-form-item label="呼叫结果">
                <el-checkbox-group v-model="formData1.callResult">
                  <el-checkbox label="完成" name="type"></el-checkbox>
                  <el-checkbox label="应答" name="type"></el-checkbox>
                  <el-checkbox label="无人接听" name="type"></el-checkbox>
                  <el-checkbox label="挂断" name="type"></el-checkbox>
                  <el-checkbox label="关机" name="type"></el-checkbox>
                  <el-checkbox label="通话中" name="type"></el-checkbox>
                  <el-checkbox label="自定义" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>

              <el-form-item class='btnGroup'>
                <el-button type='primary' @click='active = 2'>
                  下一步，设计问卷
                </el-button>
              </el-form-item>
            </el-form>
          </div>
          <!-- step2 -->
          <div class='activeBody' v-else-if='active === 2' key='step2'>
            <el-form ref="form" :model="formData1" label-width="150px">
              <el-form-item label="问题1" v-for='(item,index) in formData1.questions' :key='index'>
                <el-input v-model="formData1.questions[index].txt" style='width:100%' placeholder="请输入问题"></el-input>
              </el-form-item>

              <el-form-item class='btnGroup'>
                <el-button @click='active = 1'>
                  上一步，填写基本信息
                </el-button>
                <el-button type='primary'>
                  预览
                </el-button>
                <el-button type='primary' @click='active = 3'>
                  下一步，导入联系人
                </el-button>
              </el-form-item>
            </el-form>
          </div>
          <!-- step3 -->
          <div class='activeBody' v-else-if='active === 3' key='step3'>
            <co-transfer></co-transfer>
          </div>
          <!-- step4 -->
          <div class='activeBody' v-else-if='active === 4' key='step4'>
            // TODO:
          </div>
        <!-- </transition> -->
      </div>
    </div>
  </div>
</template>

<script>
import coTransfer from '../common/Transfer'

export default {
  name: 'addActive1',
  data () {
    return {
      active: 1,
      titleTxt: '基础信息',
      formData1: {
        name: '',
        type: '',
        content: '',
        startTime: '',
        endTime: '',
        callResult: [],
        questions: [
          {
            index: 0,
            txt: ''
          },
          {
            index: 1,
            txt: ''
          }
        ]
      }
    }
  },
  components: {
    coTransfer
  },
  methods: {
    handleChange (value, direction, movedKeys) {
      console.log(value, direction, movedKeys)
    },
    renderFunc (h, option) {
      // console.dir(option)
      return <span>{ option.key } - { option.label }</span>
    }
  }
}
</script>

<style lang='less' scoped>
.addActive1{
  .steps{
    .activeContainer{
      width:1000px;
      // border:1px solid red;
      margin:0 auto;
      margin-top:40px;
      display: flex;
      .activeTitle{
        position: relative;
        margin-right:50px;
        background:#9EA7B4;
        height: 40px;
        line-height: 40px;
        text-align: center;
        width:120px;
        flex:0 0 auto;
        color:#fff;
        .el-icon-caret-right{
          color:#9EA7B4;
          position: absolute;
          font-size:66px;
          top:-13px;
          right:-40px;
        }
      }
      .activeBody{
        flex:1;
        height: 440px;
        // border:1px solid red;
        position: relative;
        .btnGroup{
          position: absolute;
          bottom:0;
        }
      }
    }
  }
}
</style>
