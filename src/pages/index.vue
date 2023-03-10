<template>
  <div class="page-container">
    {{ url }}
    <el-button type="primary" @click="onClick">测试</el-button>
  </div>
</template>

<script setup lang="ts">
import { demo1 } from "../utils/api"

  let url = ref<Object>('')

  const onClick = () => {
    // demo1('').then((res: any) => {
    //   url.value = JSON.parse(res._value).data
    // }).catch((err: any)=>{
    //   console.log('29', err)
    // })

    useFetch('https://zj.v.api.aa1.cn/api/xz/?code=654028207203').then(res => {
      url.value = res
    })
  }
</script>

<style scoped lang="scss">
.page-container {
  padding-top: 80px;
}
</style>