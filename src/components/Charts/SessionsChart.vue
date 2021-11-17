<template>
  <div class="chart-responsive">
    <p>Сеансы</p>
    <canvas
        ref="canvas"
        id="lineChart"
        style="
        min-height: 250px;
        height: 250px;
        max-height: 250px;
        max-width: 100%;
      "
    ></canvas>
  </div>
</template>


<script>
import { Line } from "vue-chartjs"

export default {
  name: "LineChart",
  extends: Line,
  mounted() {
    this.loadLine()
  },
  data() {
    return {
      amount: {
        display: 12,
        paid: 19,
        organic: 3,
        referral: 5,
        social: 2,
        direct: 3,
        other: 5,
      }
    }
  },
  methods: {
    loadLine() {
      this.renderChart({
            labels: [
              "8 авг",
              "10 авг",
              "12 авг",
              "14 авг",
              "16 авг",
              "18 авг",
              "20 авг",
              "22 авг",
            ],
            datasets: [
              {
                label: "Сеансы",
                fill: false,
                borderWidth: 4,
                lineTension: 0,
                spanGaps: true,
                borderColor: "#33aaff",
                pointRadius: 3,
                pointHoverRadius: 7,
                pointColor: "#33aaff",
                pointBackgroundColor: "#33aaff",
                data: [
                  250, 275, 350, 280, 300, 320, 310, 390, 450, 500,
                ],
              },
            ],
          },
          {
            legend: {
              display: true,
              position: "top",
              labels: {
                boxWidth: 10,
              }
            },
          })
    }
  }
}
</script>

<style lang="scss" scoped>
#pieChart {
  max-width: 300px;
  max-height: 300px;
}
.chart {
  display: flex;
  align-items: center;
}
.chart__item {
  position: relative;
  padding-left: 14px;
  width: 150px;
  &::before {
    content: '';
    position: absolute;
    width: 7px;
    height: 7px;
    background-color: #000;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
.chart__item.display::before {
  background-color: rgb(255, 99, 132);
}
.chart__item.paid::before {
  background-color: rgb(54, 162, 235);
}
.chart__item.organic::before {
  background-color: rgb(255, 206, 86);
}
.chart__item.referral::before {
  background-color: rgb(75, 192, 192);
}
.chart__item.social::before {
  background-color: rgb(153, 102, 255);
}
.chart__item.direct::before {
  background-color: rgb(255, 159, 64);
}
.chart__item.other::before {
  background-color: rgb(34, 0, 255);
}
</style>