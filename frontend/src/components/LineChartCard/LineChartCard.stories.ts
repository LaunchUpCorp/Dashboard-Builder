import { defineComponent } from 'vue';
import type { Meta, Story } from '@storybook/vue3';
import LineChartCard from './index.vue';
import '../../index.css';

interface LineChartProps {
  theme: 'default' | 'dark' | 'light';
}

export default {
  title: 'Line chart',
  component: LineChartCard,
  argTypes: {
    lineData: {

    },
    chartOptions: {
        
    }
  },
} as Meta;

const Template: Story<LineChartProps> = (args: LineChartProps) =>
  defineComponent({
    components: { LineChartCard },
    setup() {
        
        const linedata = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'Curved',
                borderColor: '#FC2525',
                backgroundColor: "white",
                pointBackgroundColor: 'white',
                borderWidth: 1,
                pointBorderColor: 'red',
                tension: 0.4,
                data: [40, 39, 10, 40, 39, 100, 60],
                fill: false
              },
              {
                label: 'Line',
                backgroundColor: 'blue',
                borderColor: "blue",
                data: [10, 59, 20, 40, 79, 50, 20],
                fill: true
              },
              {
                label: 'Dotted',
                backgroundColor: 'darkgreen',
                borderColor: "green",
                data: [90, 19, 40, 60, 59, 20, 80],
                fill: false,
                borderDash: [5, 5],
              }
            ]
          }
        
            const chartOptions = {
              responsive: true,
              plugins: {
              legend: {
                position: 'top',
              },
              grid: {
                color: "white"
              },
              title: {
                display: true,
                text: 'Dummy Data'
              }
            }
            }
      return { 
        linedata, chartOptions
      };
    },
    template: `
    <LineChartCard 
        :lineData="linedata" 
        :options="chartOptions"
    />
  `
  });

  export const Default = Template.bind({});
Default.args = {
  theme: 'default',
};

export const Dark = Template.bind({});
Dark.args = {
  theme: 'dark'
};

export const Light = Template.bind({});
Light.args = {
  theme: 'light'
};

