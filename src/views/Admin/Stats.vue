<template>
  <div class="stats">
    <div class="stats__top">
      <div class="stats__top-select">
        <span>Основной параметр:</span>
        <select v-model="mainSelect">
          <option value="">Лучшие каналы</option>
          <option v-for="option in ['1', '2', '3']" :key="option" :value="option">{{ option }}</option>
        </select>
      </div>
      <div class="stats__top-select">
        <span>Конверсия:</span>
        <select v-model="conversion">
          <option value="">Цель 1: Заявка консультация</option>
          <option v-for="option in ['1', '2', '3']" :key="option" :value="option">{{ option }}</option>
        </select>
      </div>
      <a class="stats__top-link" href="#">Изменение группы каналов</a>
    </div>
    <div class="stats__main">
      <div class="stats__main-best">
        <best-channels-chart />
      </div>
      <div class="stats__main-sessions">
        <sessions-chart />
      </div>
      <div class="stats__main-users">
        <div class="small-box bg-warning" style="height: 130px;">
          <div class="inner">
            <h3 style="color: #fff;">44</h3>
            <div style="color: #fff;">User Registrations</div>
          </div>
          <div class="icon">
            <span class="iconify" data-icon="ion:person-add"></span>
          </div>
        </div>
        <p>Зарегистрированные пользователи</p>
      </div>
    </div>
    <div class="stats__sessions">
      <div class="stats__sessions-select">
        <select v-model="sessionsSelect">
          <option value="">Сеансы</option>
          <option v-for="option in ['1', '2', '3']" :key="option" :value="option">{{ option }}</option>
        </select>
        <span style="padding: 0 10px;">И</span>
        <a href="#" style="width: 350px; color: #42b983;">Выбор показателя</a>
      </div>
      <div class="stats__sessions-chart">
        <session-devices-chart />
      </div>
    </div>
   <div class="stats__bottom">
     <div class="map" style="width: 50%; margin-right: 50px;">
       <div class="card bg-gradient-primary">
         <div class="card-header border-0">
           <h3 class="card-title">
             <span class="iconify map-marker" data-icon="clarity:map-marker-line"></span>
             Посетители
           </h3>
         </div>
         <div class="card-body">
           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d45522840.46497562!2d61.62450108398035!3d45.861431751010976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1634672777981!5m2!1sru!2sua" width="100%" height="400px" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
         </div>
       </div>
     </div>
     <gender-chart />
   </div>
  </div>
</template>

<script>
import BestChannelsChart from "../../components/Charts/BestChannelsChart";
import SessionsChart from "../../components/Charts/SessionsChart";
import SessionDevicesChart from "../../components/Charts/SessionsDevicesChart";
import GenderChart from "../../components/Charts/GenderChart";

export default {
  name: 'Home',
  components: {
    SessionDevicesChart,
    SessionsChart,
    BestChannelsChart,
    GenderChart
  },
  data() {
    return {
      mainSelect: '',
      conversion: '',
      sessionsSelect: ''
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.stats {
  padding-bottom: 50px;
}
.stats__top {
  display: flex;
  align-items: center;
  max-width: 50%;
  margin-bottom: 20px;
}
.stats__top-select {
  display: flex;
  flex-direction: column;
  margin-right: 20px;
}
.stats__top-link {
  color: #42b983;
  margin-top: 10px;
}
.stats__main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  &-users {
    width: 22%;
    p {
      text-align: center;
    }
  }
}
.stats__sessions {
  padding-bottom: 30px;
}
.stats__sessions-select {
  display: flex;
  align-items: center;
  max-width: 500px;
  select {
    max-width: 200px;
  }
}
.stats__bottom {
  display: flex;
}
.card-title {
  display: flex;
  align-items: center;
}
.iconify.map-marker {
  width: 30px;
  height: 30px;
}
</style>