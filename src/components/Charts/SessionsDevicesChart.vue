<template>
  <div class="chart-responsive">
    <canvas
        ref="canvas"
        class="chart"
        id="line-chart"
        style="
        min-height: 250px;
        height: 250px;
        max-height: 250px;
        max-width: 100%;">
    </canvas>
  </div>
</template>

<script>
import { Line } from "vue-chartjs";

export default {
  name: "LineChart2",
  extends: Line,
  mounted() {
    this.loadLine2()
  },
  methods: {
    loadLine2() {
      this.renderChart(
          {
            labels: [
              "8 авг",
              "15 авг",
              "22 авг",
              "29 авг",
            ],
            datasets: [
              {
                label: 'Сеансы (Все пользователи)',
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
                  920, 1115, 1112, 867, 1110, 1170, 820, 873, 1187, 1132,
                ],
              },
              {
                label: 'Сеансы (Трафик планшетных и обычных ПК)',
                fill: false,
                borderWidth: 4,
                lineTension: 0,
                spanGaps: true,
                borderColor: "#ff9933",
                pointRadius: 3,
                pointHoverRadius: 7,
                pointColor: "#ff9933",
                pointBackgroundColor: "#ff9933",
                data: [
                  430, 538, 432, 540, 573, 532, 437, 587,
                ],
              },
              {
                label: 'Сеансы (Трафик с мобильных устройств)',
                fill: false,
                borderWidth: 4,
                lineTension: 0,
                spanGaps: true,
                borderColor: "#009900",
                pointRadius: 3,
                pointHoverRadius: 7,
                pointColor: "#009900",
                pointBackgroundColor: "#009900",
                data: [
                  510, 470, 420, 573, 487, 432,
                ],
              },
              {
                label: 'Сеансы (Трафик смартфонов и планшетных ПК)',
                fill: false,
                borderWidth: 4,
                lineTension: 0,
                spanGaps: true,
                borderColor: "#c01fff",
                pointRadius: 3,
                pointHoverRadius: 7,
                pointColor: "#c01fff",
                pointBackgroundColor: "#c01fff",
                data: [
                  420, 573, 587, 432,
                ],
              },
            ],
          },
          {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: true,
              labels: {
                padding: 20
              }
            },
          }
      );
    }
  }
}
</script>

<style scoped>

</style>