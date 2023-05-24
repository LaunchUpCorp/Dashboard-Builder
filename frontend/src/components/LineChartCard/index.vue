<script lang='ts'>
import { defineComponent, PropType } from 'vue';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface ILineData {
  labels: Array<string>;
  datasets: Array<IDataSet>
  };

interface IDataSet {
    label: string;
    backgroundColor: string;
    data: Array<number>
}

interface cardThemes {
    theme: 'default' | 'dark' | 'light';
}
const themeTypes = {
    'default': 'bg-white',
    'dark': 'bg-slate-800',
    'light': 'bg-slate-400',
}

export default defineComponent({
    name: 'Line Chart Card ',
    components: {
        Line
    },
    props: {
        lineData: {
            type: Object as PropType<ILineData>,
        },
        options: {
            type: Object
        },
        theme: {
            type: String as PropType<cardThemes['theme']>,
            default: 'default'
        }
    },
    setup(props) {
        const { lineData, options} = props
        const themeType = themeTypes[props.theme]

        return { lineData, options, themeType}
    }

})

</script>

<template>
    <div>
        <p>Line Chart</p>
        <div>
            <Line :class="themeType" :options="options" :data="lineData"/>
        </div>
    </div>
</template>