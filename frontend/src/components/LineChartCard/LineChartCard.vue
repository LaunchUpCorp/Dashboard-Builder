<script lang='ts'>
import { defineComponent, PropType, ref, onMounted } from 'vue';
import ApexCharts from 'apexcharts'

export default defineComponent({
    name: 'Line Chart Card',
    props: {
        theme: {

        },

    },
    setup() {
        const chartRef = ref(null);

        onMounted(() => {
            const options = {
                chart: {
                    type: "line"
                },
                series: [{
                    name: 'sales',
                    data: [30, 40, 50, 60, 73, 30, 56, 53]
                }],
            };
            
            const chart = new ApexCharts(chartRef.value, options);
            chart.render();
        })

        return {
            chartRef
        }
    }
})

</script>

<template>
    <div>
        <p>Line Chart</p>
        <div class="w-1/2" ref="chartRef">

        </div>
    </div>
</template>