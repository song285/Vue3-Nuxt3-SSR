
export default defineEventHandler(async () => {
    const toolList:any = await $fetch('https://zj.v.api.aa1.cn/api/xz/?code=654028207203')

    return toolList;
})