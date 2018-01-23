<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script type="text/ecmascript-6">
  // eslint-disable-next-line no-use-before-define
  import MHeader from './components/m-header/m-header'
  import Tab from './components/tab/tab'
  import Player from './components/player/player'
  export default {
    components: {
      MHeader,
      Tab,
      Player
    }
  }
</script>

<style scoped lang="stylus" >
  /* eslint-disable */
  @import "./common/stylus/variable.styl";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-theme;
}
</style>
