<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from 'vue'

interface data {
    dataType: String,
    date: String,
    time: String
}

interface cardThemes {
    theme: 'default' | 'dark' | 'light' | 'blue' | 'red';
}

const themeTypes = {
    'default': 'bg-white text-black',
    'dark': 'bg-slate-800 text-white',
    'light': 'bg-slate-400 text-black',
    'blue': 'bg-blue-700 text-white',
    'red': 'bg-red-400 text-black',
}

const themeChildTypes = {
    'default': 'text-slate-500 border-black',
    'dark': 'text-slate-400 border-slate-200',
    'light': 'text-slate-800 border-black',
    'blue': 'text-slate-400 border-black',
    'red': 'text-slate-800 border-black',
}

export default defineComponent({
    name: 'Statistic Card',
    props: {
        //Do themes later
        theme: {
            type: String as PropType<cardThemes['theme']>,
            default: 'default'
        },
        cardType: {
            type: String,
            default: "Type"
        },
        //Data
        data: {
            type: Object as PropType<data>
        }
    },
    setup(props,) {
        const type = props.cardType
        const statData = props.data
        const themeType = themeTypes[props.theme]
        const themeChildType = themeChildTypes[props.theme]

        let lastUpdate = ref<String>("Temp")

        function calculateLastTimeUpdate() {
            const currentDate = new Date();
            const currentTime = currentDate.getTime();
            const lastUpdateTime = new Date(`${statData?.date}T${statData?.time}`).getTime(); 
            const timeDiffSeconds = Math.floor((currentTime - lastUpdateTime) / 1000);
            if ( lastUpdateTime > currentTime ||  isNaN(timeDiffSeconds) ) {
                lastUpdate.value = 'Time Error'
            } else if (timeDiffSeconds < 3600) {
                const timeDiffMinutes = Math.floor(timeDiffSeconds / 60);
                lastUpdate.value = `${timeDiffMinutes} ${timeDiffMinutes > 1 ? 'Minutes' : 'Minute'} Ago`;
            } else if (timeDiffSeconds < 86400) {
                const timeDiffHours = Math.floor(timeDiffSeconds / 3600);
                lastUpdate.value = `${timeDiffHours} ${timeDiffHours > 1 ? 'Hours' : 'Hour'} Ago`;
            } else if (timeDiffSeconds < 604800 ) {
                const timeDiffDays = Math.floor(timeDiffSeconds / 86400);
                lastUpdate.value = `${timeDiffDays} ${timeDiffDays > 1 ? 'Days' : 'Day'} Ago`;
            } else if (timeDiffSeconds < 2592000) {
                const timeDiffWeeks = Math.floor(timeDiffSeconds / 604800);
                lastUpdate.value = `${timeDiffWeeks} ${timeDiffWeeks > 1 ? 'Weeks' : 'Week'} Ago`;
            } else if (timeDiffSeconds < 31104000) {
                const timeDiffMonths = Math.floor(timeDiffSeconds / 2592000 );
                lastUpdate.value = `${timeDiffMonths} ${timeDiffMonths > 1 ? 'Months' : 'Month'} Ago`;
            } else {
                const timeDiffYears = Math.floor(timeDiffSeconds / 31104000);
                lastUpdate.value = `${timeDiffYears} ${timeDiffYears > 1 ? 'Years' : 'Year'} Ago`;
            }

        }

        onMounted(() => {
            calculateLastTimeUpdate()
        })

        return { themeType, themeChildType, type, statData, lastUpdate, calculateLastTimeUpdate}
    },
})
</script>

<template>
    <div>
        <div class="flex flex-col w-1/2 rounded-md border drop-shadow-md border-black" :class="themeType">
            <div class="flex flex-row">
                <p class="flex-grow mx-4 my-2">{{ cardType }} Icon</p> 
                <div class="flex flex-col mx-4 my-2">
                    <p class="text-sm text-right" :class="themeChildType">{{cardType}}</p>
                    <p>{{ data?.dataType }}</p>
                </div>
            </div>
            <hr class="mx-2 mb-2 border-1" :class="themeChildType"/>
            <div class=" mb-2 mx-2 flex flex-row space-x-1.5">
                <p class>Time Icon</p>
                <p>{{lastUpdate}}</p>
            </div>
        </div>
    </div>
</template>