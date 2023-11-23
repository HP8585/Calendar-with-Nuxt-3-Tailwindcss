<script setup>
const { selectedDate, selectedMonth, selectedYear } = changeCalendar()
const { darkMode, toggleMode } = darkLight()

const imgSrc = ref(null)

watchEffect(()=>{
    if(selectedMonth.value >= 1 && selectedMonth.value <= 3){
        imgSrc.value = 'https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?cs=srgb&dl=pexels-pixabay-235621.jpg&fm=jpg'
    }else if(selectedMonth.value >= 4 && selectedMonth.value <= 6){
        imgSrc.value = 'https://images8.alphacoders.com/133/1338181.png'
    }else if(selectedMonth.value >= 7 && selectedMonth.value <= 9){
        imgSrc.value = 'https://margaretbourne.com/wp-content/uploads/2023/04/Summer-Wallpapers-for-iPhone-ft.jpg'
    }else{
        imgSrc.value = 'https://img.freepik.com/free-photo/defocused-dry-autumn-leaves-nature_23-2150708277.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1700697600&semt=ais'
    }
})

onMounted(()=>{
    const html = document.querySelector('html')
    if(localStorage.theme === 'dark'){
        html.classList.add('dark')
        darkMode.value = true
    }else{
        html.classList.remove('dark')
        darkMode.value = false
    }
})
</script>

<template>
    <div class="dateWrapper">
        <img :src="imgSrc" class="w-full h-full object-cover -z-10">
    <span v-show="selectedDate" class="date">
        
        {{ `${selectedDate} - ${selectedMonth} - ${selectedYear} ` }}
    </span>
 </div>

<div class="mainBoxx">
 <div class="flex flex-col">
    <div class="flex flex-row-reverse justify-between p-2  w-full ">
    <year1/>
    <month1/>
</div>

    <dates1/>
 </div>

 <!--Dark/Light mode-->
 <div class="w-full flex justify-between px-10 py-4">
    <div/>

    <div class="toggle" @click="toggleMode">
        <div class=" " :class="darkMode ? 'translate-x-9':'left-0'" />
    </div>
 </div>
 
</div>


</template>

<style scoped>
.mainBoxx{
    @apply flex flex-col space-x-5 w-fit mx-auto mt-10 rounded-3xl overflow-hidden border bg-white dark:bg-slate-800 dark:border-slate-900 shadow-xl
}
.dateWrapper{
    @apply w-96 h-36 rounded-xl mt-8 mx-auto overflow-hidden relative
}
.date{
    @apply text-white text-5xl whitespace-nowrap absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2;
    text-shadow: 0 0 10px black;
}
.toggle{
    @apply bg-slate-200 dark:bg-slate-700 w-[4.5em] h-[2.1em] px-1 py-0.5 rounded-full cursor-pointer
}
.toggle div{
  @apply  bg-white dark:bg-slate-900 shadow cursor-pointer w-7 h-7 rounded-full duration-300
}
</style>