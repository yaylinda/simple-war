<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  public $material: any;

  constructor() {
    super();
    console.log("App constructor");
    console.log(`Running in ${process.env.NODE_ENV}`);
    this.$material.theming.theme = "myTheme";
  }

  public mounted() {
    console.log("App mounted");
  }
}
</script>

<style lang="scss">
@import "~vue-material/dist/theme/engine";

@include md-register-theme(
  "myTheme",
  (
    accent: #ff4495,
    primary: #50e3c2,
    theme: dark
  )
);

@import "~vue-material/dist/theme/all";

#app {
  position: relative;
  font-family: "Roboto Mono", sans-serif;
  min-height: 100vh;
}
</style>
