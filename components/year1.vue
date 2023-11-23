<script setup>
const { selectedYear } = changeCalendar()
</script>

<template>
    <div class="mainBox">
        <span>
            <i class="fa fa-chevron-left" @click="selectedYear--" />
            <span>{{selectedYear }}</span>
            <i class="fa fa-chevron-right" @click="selectedYear++" />
        </span>
    </div>
</template>

<style scoped>
.mainBox{
    @apply  p-3 text-black flex items-center leading-[1px] text-[1rem]
}
.mainBox > span{
    @apply flex items-center space-x-1.5 select-none dark:text-white
}
.mainBox > span i{
    @apply  cursor-pointer
}
</style>