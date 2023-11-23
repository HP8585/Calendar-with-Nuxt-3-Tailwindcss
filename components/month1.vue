<script setup>

const {selectedMonth, cMonth } = changeCalendar()


const modifyMonth = v =>{
    if (selectedMonth.value + v > 12) {
        selectedMonth.value = 1;
    } else if (selectedMonth.value + v < 1) {
        selectedMonth.value = 12;
    } else {
        selectedMonth.value += v;
    }
    
}
</script>

<template>
    <div class="mainBox">
        <span>
            <i class="fa fa-chevron-left" @click="modifyMonth(-1)" />
            <span>{{ cMonth }}</span>
            <i class="fa fa-chevron-right" @click="modifyMonth(1)" />
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
    @apply cursor-pointer
}
</style>