<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

interface data {
    dataType: String,
    date: String,
    time: String
}

export default defineComponent({
    name: 'Statistic Card',
    props: {
        //Do themes later
        theme: {
            type: String,
            default: 'default'
        },
        cardType: {
            type: String,
            default: "Type"
        },
        //Data
        dummyData: {
            type: Object as PropType<data>
        }
    },
    setup(props) {
        const type = props.cardType
        const data = props.dummyData
        //let currentDate = new Date();
        //let day = currentDate.getFullYear() + "-" + currentDate.getMonth() + "-" + currentDate.getDate()
        //let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds()
        let lastUpdate = ref<String>("Temp")

        function calculateLastTimeUpdate() {
            const currentDate = new Date();
            const currentTime = currentDate.getTime();
            const lastUpdateTime = new Date(`${data?.date}T${data?.time}`).getTime(); // Convert date and time string to Date object and get its time value
            const timeDiffSeconds = Math.floor((currentTime - lastUpdateTime) / 1000); // Calculate time difference in seconds

            if (timeDiffSeconds < 60) {
                lastUpdate.value = `${timeDiffSeconds} seconds ago`;
            } else if (timeDiffSeconds < 3600) {
                const timeDiffMinutes = Math.floor(timeDiffSeconds / 60);
                lastUpdate.value = `${timeDiffMinutes} ${timeDiffMinutes > 1 ? 'minutes' : 'minute'} ago`;
            } else if (timeDiffSeconds < 86400) {
                const timeDiffHours = Math.floor(timeDiffSeconds / 3600);
                lastUpdate.value = `${timeDiffHours} ${timeDiffHours > 1 ? 'hours' : 'hour'} ago`;
            } else {
                const timeDiffDays = Math.floor(timeDiffSeconds / 86400);
                lastUpdate.value = `${timeDiffDays} ${timeDiffDays > 1 ? 'days' : 'day'} ago`;
            }
            //Check time then date
            console.log("Time: " + currentTime)
            console.log("Day: " + lastUpdateTime)
            console.log(data?.date)
            console.log(data?.time)

        }

        return { type, data, lastUpdate, calculateLastTimeUpdate}
    },
})
</script>

<template>
    <div>
        <p class="m-5">Statistic Card</p>
        <div class="flex flex-col w-1/2 rounded-md border drop-shadow-md border-black m-5">
            <div class="flex flex-row">
                <p class="flex-grow mx-4 my-2">Icon</p> 
                <div class="flex flex-col mx-4 my-2">
                    <p class="text-sm text-slate-500 text-right">{{cardType}}</p>
                    <p>{{ data?.dataType }}</p>
                </div>
            </div>
            <hr class="mx-2 mb-2 border-1 border-slate-300"/>
            <div class=" mb-2 mx-2 flex flex-row space-x-1.5">
                <p class>icon</p>
                <p>{{lastUpdate}}</p>
            </div>
        </div>
        <button @click="calculateLastTimeUpdate" class="m-5 border border-black rounded-md p-2">Test Button</button>
    </div>
</template>