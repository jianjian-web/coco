<template>
  <div class='detailsActive'>
    <el-tabs v-model="activeName" @tab-click="handleClick" class='my-el-tabs'>
      <el-tab-pane label="仪表盘" name="first" class='dashboard'>
        <el-button-group>
          <el-button :autofocus='true' @click='current = true'>通话</el-button>
          <el-button @click='current = false'>问卷</el-button>
        </el-button-group>
        <div class='dashboardBody'>
          <dashboard-call v-if='current'></dashboard-call>
          <dashboard-question v-else></dashboard-question>
        </div>
      </el-tab-pane>
      <el-tab-pane label="联系人" name="second">
        <details-contacts></details-contacts>
      </el-tab-pane>
      <el-tab-pane label="通话记录" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="呼叫人" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import detailsContacts from './DetailsContacts'
import dashboardCall from './DetailsDashboardCall'
import dashboardQuestion from './DetailsDashboardQuestion'
export default {
  name: 'detailsActive',
  data () {
    return {
      activeName: 'first',
      current: true
    }
  },
  components: {
    detailsContacts, dashboardCall, dashboardQuestion
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang='less' scoped>
.detailsActive{
  .my-el-tabs{
    margin-top:-15px;
    .dashboard{
      text-align:center;
      .dashboardBody{
        margin-top:15px;
        // display: flex;
        &>.detailsItemMini:last-child{
          margin-right:0;
        }
      }
    }
  }
}
</style>
