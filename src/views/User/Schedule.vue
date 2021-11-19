<template>
  <div class="schedule">
    <div class="schedule__top">
      <div class="schedule__select">
        <select v-model="cinemas" @change="cinemasSelect">
          <option value="all">{{ $t('schedule.cinemas') }}</option>
          <option v-for="item in this.getStateCinemas.database" :key="item.id" :value="item.title">{{ item.title }}</option>
        </select>
      </div>
      <div class="schedule__select">
        <select v-model="date">
          <option value="all">Дата</option>
          <option v-for="item in dateList" :key="item" :value="item.time">{{ item.time }}</option>
        </select>
      </div>
      <div class="schedule__select">
        <select v-model="films">
          <option value="all">{{ $t('schedule.films') }}</option>
          <option v-for="item in this.getStateFilmsNow.database" :key="item.id" :value="item.title">{{ item.title }}</option>
        </select>
      </div>
      <div class="schedule__select">
        <select v-model="halls">
          <option value="all">{{ $t('schedule.halls') }}</option>
          <option v-for="(item, index) in hallsList" :key="index" :value="item">{{ item }}</option>
        </select>
      </div>
    </div>
    <div class="schedule__items" v-for="(item, key) in filteredItems" :key="item.id">
      {{key}}
      <table class="schedule__item">
        <thead>
        <tr class="schedule__item-top">
          <td class="schedule__item-top__title">{{ $t('schedule.list.time') }}</td>
          <td class="schedule__item-top__title">{{ $t('schedule.list.film') }}</td>
          <td class="schedule__item-top__title">Зал</td>
          <td class="schedule__item-top__title">{{ $t('schedule.list.price') }}</td>
          <td class="schedule__item-top__title">{{ $t('schedule.list.reserve') }}</td>
        </tr>
        </thead>
        <tbody>
        <tr class="schedule__item-main" v-for="itemList in item" :key="itemList.id">
          <td class="schedule__item-main__info">{{ itemList.time }}</td>
          <td class="schedule__item-main__info">{{ itemList.film }}</td>
          <td class="schedule__item-main__info">{{ itemList.hall }}</td>
          <td class="schedule__item-main__info">{{ itemList.price }}</td>
          <td class="schedule__item-main__info"><router-link v-if="itemList.date !== this.now" :to="'/order/' + itemList.id"><span class="iconify" data-icon="akar-icons:ticket"></span></router-link></td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="schedule__item-not-found info text-danger" v-if="!Object.keys(filteredItems).length">{{ $t('schedule.not-found') }}</div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import {onValue, ref} from "firebase/database";
import db from "../../firebase/database";

export default {
  name: "Schedule",
  computed: {
    ...mapGetters(['getStateCinemas', 'getStateFilmsNow']),
    filteredItems() {
      let itemsDate = this.scheduleList
      if(this.cinemas !== 'all') {
        Object.keys(itemsDate).forEach((itemID) => {
          const items = itemsDate[itemID]
          Object.keys(items).forEach((item) => {
            if(items[item].cinema !== this.cinemas) {
              delete items[item]
            }
          })
        })
      }
      if(this.date !== 'all') {
        Object.keys(itemsDate).forEach((itemID) => {
          if(itemID !== this.date) {
            delete itemsDate[itemID]
          }
        })
      }
      if(this.films !== 'all') {
        Object.keys(itemsDate).forEach((itemID) => {
          const items = itemsDate[itemID]
          Object.keys(items).forEach((item) => {
            if(items[item].film !== this.films) {
              delete items[item]
            }
          })
        })
      }
      if(this.halls !== 'all') {
        Object.keys(itemsDate).forEach((itemID) => {
          const items = itemsDate[itemID]
          Object.keys(items).forEach((item) => {
            if(items[item].hall !== this.halls) {
              delete items[item]
            }
          })
        })
      }
      Object.keys(itemsDate).forEach((itemID) => {
        if(!Object.keys(itemsDate[itemID]).length) {
          delete itemsDate[itemID]
        }
      })
      return itemsDate
    }
  },
  mounted() {
    const dateObj = new Date()
    if(dateObj.getDate() < 10) {
      this.now = '0' + dateObj.getDate() + '.' + (dateObj.getMonth() + 1) + '.' + dateObj.getFullYear()
    } else {
      this.now = dateObj.getDate() + '.' + (dateObj.getMonth() + 1) + '.' + dateObj.getFullYear()
    }
    this.setupItems()
    this.setupDateList()
    if(this.$route.query.cinema) {
      this.cinemas = this.$route.query.cinema
      if(this.$route.query.hall) {
        this.hallsList.push(this.$route.query.hall)
        this.halls = this.$route.query.hall
      }
    }
  },
  watch: {
    cinemas() {
      this.setupItems()
      this.setupDateList()
    },
    date() {
      this.setupItems()
      this.setupDateList()
    },
    films() {
      this.setupItems()
      this.setupDateList()
    },
    halls() {
      this.setupItems()
      this.setupDateList()
    },
  },
  data() {
    return {
      now: '',
      cinemas: 'all',
      date: 'all',
      films: 'all',
      halls: 'all',
      hallsList: [],
      scheduleList: {},
      dateList: {},
      months: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
      monthsUA: ['Січня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Червня', 'Липня', 'Серпня', 'Вересня', 'Жовтеня', 'Листопада', 'Грудня'],
      change: 0
    }
  },
  methods: {
    ...mapMutations(['readCinemasData', 'readFilmsNowData']),
    cinemasSelect() {
      if(this.cinemas === 'all') {
        this.halls = 'all'
        return this.hallsList = []
      }
      for(let key in this.getStateCinemas.database) {
        if(this.getStateCinemas.database[key].title === this.cinemas) {
          this.hallsList = []
          const currentHallRef = ref(db, `cinemas/${key}/halls`)
          onValue(currentHallRef, (snapshot) => {
            Object.keys(snapshot.val()).forEach(element => {
              this.hallsList.push(snapshot.val()[element].name)
            })
          })
        }
      }
    },
    setupDateList() {
      Object.keys(this.scheduleList).forEach((element) => {
        if(!this.dateList[element]) {
          this.dateList[element] = {}
        }
        this.dateList[element].time = element
      })
    },
    setupItems() {
      this.readCinemasData()
      this.readFilmsNowData()
      const scheduleRef = ref(db, 'schedule')
      const nowDateArray = this.now.split('.')
      onValue(scheduleRef, (snapshot) => {
        Object.keys(snapshot.val()).forEach((element) => {
          const filmDateArray = snapshot.val()[element].date.split('.')
          if(nowDateArray[2] <= filmDateArray[2]) {
            if(nowDateArray[1] <= filmDateArray[1]) {
              if(nowDateArray[0] <= filmDateArray[0]) {
                const date =  filmDateArray[0] + ' ' + this.months[Number(filmDateArray[1]) - 1]
                if(!this.scheduleList[date]) {
                  this.scheduleList[date] = {}
                }
                this.scheduleList[date][snapshot.val()[element].id] = snapshot.val()[element]
              }
            }
          }
        })
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.schedule {
  padding: 50px 0;
  max-width: 1500px;
  margin: 0 auto;
  &__top {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
  &__select + &__select {
    margin-left: 30px;
  }
}
.schedule__items {
  margin-top: 30px;
}
.schedule__item {
  padding: 50px;
  width: 100%;
  margin: 0 auto;
}
.schedule__item-top {
  font-weight: 600;
  &__title {
    border-bottom: 1px solid #42b983;
    text-align: center;
    padding: 5px 30px;
  }
}
.schedule__item-main {
  &__info {
    border-bottom: 1px solid #42b983;
    text-align: center;
    padding: 10px 0;
  }
}
</style>