<script setup>
const { generateDates, dates, firstDayOffset, selectedDate } = changeCalendar()
const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]
onMounted(()=> generateDates())

const grantClasses = (val) => {
    if(selectedDate.value === val && val.toString().length === 1){
        return 'active'
    }else if(selectedDate.value === val && val.toString().length === 2){
        return 'active2'
    }else{
        return;
    }
}
</script>

<template>
<div class="mainBox">
    <ul>
        <li v-for="day in days" :key="day">
            <span class="text-gray-500">
                {{ day.substring(0, 3) }}
            </span>
        </li>
    </ul>

    <ul>
         <template v-for="offset in firstDayOffset" :key="offset">
            <li  />
        </template>
        <li v-for="date in dates" :key="date" @click="selectedDate = date.date"
         class="cursor-pointer select-none" 
         :class="grantClasses(date.date)">
            <span>{{ date.date }}</span>
        </li>
    </ul>
</div>
</template>

<style scoped>
.mainBox{
@apply w-full border-y dark:border-y-slate-700 p-2 rounded-b-md select-none
}
.mainBox ul{
    @apply grid grid-cols-7 place-items-center gap-x-3 gap-y-5
}
.mainBox ul li.active{
    @apply bg-green-500 rounded-full text-white px-3 py-1
}

.mainBox ul li.active2{
    @apply bg-green-500 rounded-full text-white px-2 py-1
}
</style>