<template>
  <div class="chart-responsive">
    <p>Лучшие каналы</p>
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
    loadPie() {
      this.renderChart({
            labels: [
              "Display",
              "Paid Search",
              "Organic Search",
              "Referral",
              "Social",
              "Direct",
              "(Other)"
            ],
            datasets: [
              {
                data: [this.amount.display, this.amount.paid, this.amount.organic, this.amount.referral, this.amount.social, this.amount.direct, this.amount.other],
                backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 206, 86)',
                  'rgb(75, 192, 192)',
                  'rgb(153, 102, 255)',
                  'rgb(255, 159, 64)',
                  'rgb(34,0,255)'
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