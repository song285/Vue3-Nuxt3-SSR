<template>
  <div>
    {{ url }}
    <el-button type="primary" @click="onClick">测试</el-button>
  </div>
</template>

<script setup lang="ts">
import { demo1 } from "../utils/api"

  let url = ref<Object>('')

  const onClick = () => {
    demo1('').then((res: any) => {
      url.value = JSON.parse(res._value).data
    }).catch((err: any)=>{
      console.log('29', err)
    })
  }
</script>