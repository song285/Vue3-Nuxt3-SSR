<template>
  <div>
    <div class="header-fixed">
      你说啥
    </div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 0 10px #a0a0a0;
}
</style>
