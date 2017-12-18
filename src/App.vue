<template>
  <div id="app">
    <co-layout></co-layout>
  </div>
</template>

<script>
import coLayout from './components/Layout'
export default {
  name: 'app',
  data () {
    return {}
  },
  components: {
    coLayout
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:100%;
  background:#F0F2F5;
  font-size:14px;
}
*{
  box-sizing: border-box;
}
body,html{
  margin:0;
  padding:0;
  height:100%;
}
.lf{
  float:left;
}
.rt{
  float:right;
}
  ::-webkit-scrollbar
 {/*//轨道两端 */
    width: 6px;
    height: 8px;
    /* background-color: #faa; */
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(86,86,86,0.3);
    border-radius: 10px;
    background-color: transparent; /*轨道颜色 */
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
    border-radius: 6px;
    -webkit-box-shadow: inset 0 0 6px rgba(139,139,139,0.3);
    background-color: #dbdee2;
}
</style>
