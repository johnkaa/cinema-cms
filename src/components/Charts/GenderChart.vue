<template>
  <div class="chart-responsive">
    <h3>Пол</h3>
    <div class="chart">
      <canvas id="pieChart" ref="canvas"></canvas>
    </div>
  </div>
</template>


<script>
import { Pie } from "vue-chartjs"

export default {
  name: "PieChart",
  extends: Pie,
  mounted() {
    this.loadPie()
  },
  data() {
    return {

    }
  },
  methods: {
    loadPie() {
      this.renderChart({
            labels: [
              "Мужской",
              "Женский"
            ],
            datasets: [
              {
                data: [56, 44],
                backgroundColor: [
                  'rgb(54,84,235)',
                  'rgb(54, 162, 235)',
                ],
              },
            ],
          },
          {
            legend: {
              display: true,
              position: 'right',
              labels: {
                boxWidth: 12,
              }
            },
          })
    }
  }
}
</script>

<style lang="scss" scoped>
#pieChart {
  width: 500px;
}
</style>