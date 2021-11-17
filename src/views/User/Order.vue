<template>
  <div class="order">
    <img class="order__img" :src="hallImg" alt="" />
    <div class="order__inner">
      <img class="order__film-img" :src="filmImg" alt="" />
      <div class="order__info">
        <div class="order__film-name">{{ scheduleItem.film }}</div>
        <div class="order__info-date">{{ scheduleItem.date + ', ' + scheduleItem.time + ', ' + scheduleItem.hall }}</div>
        <div class="order__info-top">
          <div class="order__info-price">{{ $t('order.price') }}: {{ scheduleItem.price }}</div>
          <div class="order__info-order">Ваш заказ: <span class="order__info-order-span">{{ $t('order.tickets') }}: {{ tickets }}, {{ $t('order.sum') }} {{ sum }} грн.</span></div>
        </div>
        <div class="order__table">
          <div class="order__table-screen">{{ $t('order.screen') }}</div>
          <div class="order__table-items">
            <div class="order__table-item" v-for="itemRow in 9" :key="itemRow">
              <div class="order__table-row">Ряд {{ itemRow }}</div>
              <div class="order__table-column" v-for="itemColumn in 13" :key="itemColumn" @click="order(itemRow, itemColumn)">{{ itemColumn }}</div>
            </div>
          </div>
        </div>
        <div class="order__info-text">{{ $t('order.order-rules') }}</div>
        <div class="order__info-text">{{ $t('order.order-time') }}</div>
        <div class="order__info-btns">
          <my-button class="order__info-btn" @click="submitOrder">{{ $t('order.order-btn') }}</my-button>
          <my-button class="order__info-btn_green" @click="buy">{{ $t('order.buy') }}</my-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "../../components/UI/MyButton";
import {onValue, ref} from "firebase/database";
import db from "../../firebase/database";
export default {
  name: "Order",
  components: {MyButton},
  props: {
    id: Number || String
  },
  mounted() {
    this.setupOrder()
  },
  watch: {
    '$i18n.locale'() {
      this.setupOrder()
    }
  },
  data() {
    return {
      scheduleItem: {},
      filmImg: '',
      hallImg: '',
      tickets: 0,
      sum: 0,
      orderItems: {}
    }
  },
  methods: {
    setupOrder() {
      const scheduleRef = ref(db, `schedule/${this.id}`)
      onValue(scheduleRef, (snapshot) => {
        this.scheduleItem = snapshot.val()
      })
      const filmsRef = ref(db, 'films/filmsNow')
      onValue(filmsRef, (snapshot) => {
        Object.keys(snapshot.val()).forEach((element) => {
          if(this.scheduleItem.film === snapshot.val()[element].title) {
            this.filmImg = snapshot.val()[element].img
          }
        })
      })
      const cinemasRef = ref(db, 'cinemas')
      onValue(cinemasRef, (snapshot) => {
        Object.keys(snapshot.val()).forEach((element) => {
          if(this.scheduleItem.cinema === snapshot.val()[element].title) {
            const cinema = snapshot.val()[element]
            Object.keys(cinema.halls).forEach((elementHalls) => {
              if(this.scheduleItem.hall === cinema.halls[elementHalls].name) {
                this.hallImg = cinema.halls[elementHalls].img
              }
            })
          }
        })
      })
    },
    order(row, column) {
      if(!this.orderItems[row]) {
        this.orderItems[row] = []
      }
      if(this.orderItems[row].includes(column)) {
        return alert('Вы уже выбрали это место!')
      }
      this.orderItems[row].push(column)
      this.tickets++
      this.sum = this.tickets * this.scheduleItem.price
    },
    submitOrder() {
      if(this.tickets === 0) {
        alert('Вы ещё не выбрали мест!')
      } else {
        alert('К оплате: ' + Number(this.sum + (this.tickets*3)) + ' грн. Выкупите билеты на кассе не раньше чем за полчаса до начала сеанса!')
      }
    },
    buy() {
      if(this.tickets === 0) {
        alert('Вы ещё не выбрали мест!')
      } else {
        alert('К оплате: ' + this.sum + ' грн.')
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.order {
  padding-bottom: 50px;
}
.order__img {
  width: 100%;
  height: 500px;
  margin-bottom: 20px;
}
.order {
  &__inner {
    display: flex;
    padding: 0 50px;
  }
  &__film-img {
    margin-right: 30px;
    width: 300px;
    height: 500px;
  }
  &__film-name {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  &__info-top {
    display: flex;
    margin-top: 15px;
    margin-bottom: 30px;
  }
  &__info-order {
    margin-left: 50px;
    &-span {
      border: 3px solid #42b983;
      padding: 5px 20px;
    }
  }
}
.order__table {
  margin-bottom: 30px;
  &-screen {
    font-size: 40px;
    border-top: 2px solid #000;
    text-align: center;
  }
  &-item {
    display: flex;
    justify-content: space-between;
  }
  &-row {
    font-weight: 700;
    margin-bottom: 40px;
  }
  &-column {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 5px 10px 5px 5px;
    cursor: pointer;
    background-color: #42b983;
  }
}
.order__info-btns {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.order__info-btn_green {
  background-color: #42b983;
  margin-left: 20px;
}
</style>