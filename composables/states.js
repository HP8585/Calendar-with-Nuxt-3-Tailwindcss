import dayjs from "dayjs"

export const changeCalendar = ()=>{
    const selectedDate = useState('dateee', ()=> dayjs().date())
    const selectedMonth = useState('month', ()=> dayjs().month())
    const selectedYear = useState('year', ()=> dayjs().year())

    //modify month's format
    const cMonth = computed(()=> dayjs().month(selectedMonth.value - 1).format('MMMM'))// Subtract 1 from selectedMonth to account for zero-indexed months


    const dates = ref([])

    const generateDates = (m = selectedMonth.value , y = selectedYear.value)=>{
        dates.value = [];
        const daysInMonth = dayjs().month(m - 1).daysInMonth()

        for( let i = 1; i <= daysInMonth; i++){
            dates.value.push({
                date: i,
                day: dayjs().month(m - 1).year(y).date(i).day() //this is to get what day it is like sunday monday etc...
            })
        }
    }

    const firstDayOffset = computed(() => {
        const firstDayOfMonth = dayjs().month(selectedMonth.value - 1).year(selectedYear.value).date(10).day();
        return Array(firstDayOfMonth).fill(null);
    });

    watchEffect(()=>{
        generateDates()
    })
    return{
        selectedDate,
        selectedMonth,
        selectedYear,
        cMonth,
        generateDates,
        dates,
        firstDayOffset
    }
}


//this is for the dark mode

export const darkLight = ()=>{
    const darkMode = useState('dark', ()=> false)

    const toggleMode = ()=>{
        darkMode.value = !darkMode.value

        const html = document.querySelector('html')
        if(darkMode.value){
            localStorage.theme = 'dark';
            html.classList.add('dark')
        }else{
            localStorage.theme = 'light';
            html.classList.remove('dark')
        }
    }

    return{
        darkMode,
        toggleMode
    }
}