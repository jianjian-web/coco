<template>
  <div class='audioPlay'>
    <audio ref='audio'>
      <source src="../../assets/audio/test.mp3" type="audio/mp3">
    </audio>
    <div class='control'>
      <span class='btn' :class='{"el-icon-caret-right": isPlay, "el-icon-remove-outline": !isPlay}' @click='isPlay = !isPlay'></span>
      <el-slider v-model="progress" class='slide' :format-tooltip="formatTooltip" @change='handleProgressChange'></el-slider>
      <span v-text='totleTime'></span>
    </div>
  </div>
</template>

<script>
export default{
  name: 'audioPlay',
  data () {
    return {
      isPlay: false,
      currentTime: '00:00', // 当前播放时间
      totleTime: '00:00',
      duration: 0,
      progress: 0
    }
  },
  props: {
    audioUrl: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.audioDom = this.$refs.audio
    this.audioDom.addEventListener('canplay', () => {
      this.duration = parseInt(this.audioDom.duration) // 总时间毫秒数
      this.totleTime = this.formatter(this.duration) // 总时间
    })
  },
  methods: {
    formatTooltip (val) { // 格式化slide的tip显示
      const time = this.formatter((val / 100) * this.duration)
      return time
    },
    startAudio () {
      this.audioDom.play()
    },
    pauseAudio () {
      this.audioDom.pause()
    },
    getTime () {
      this.timer = setInterval(() => {
        const time = parseInt(this.audioDom.currentTime)
        this.currentTime = this.formatter(time)
        this.progress = (time / this.duration) * 100
      }, 200)
    },
    formatter (value) {
      return Math.floor(value / 60) + ':' + (value % 60 / 100).toFixed(2).slice(-2)
    },
    handleProgressChange (v) {
      // console.log(v)
      this.audioDom.currentTime = parseInt(this.duration * v / 100)
    }
  },
  watch: {
    isPlay (v) {
      if (v) {
        this.startAudio()
        this.getTime()
      } else {
        this.pauseAudio()
        clearInterval(this.timer)
        this.timer = null
      }
    }
  }
}
</script>

<style lang='less' scoped>
.audioPlay{
  .control{
    display: flex;
    justify-content: center;
    align-items: center;
    .slide{
      width:60%;
      min-width:100px;
      margin:0 20px;
    }
  }
}
</style>

