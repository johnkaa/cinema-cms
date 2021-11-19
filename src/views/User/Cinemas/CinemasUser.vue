await <template>
  <div class="cinemas">
    <h2 class="cinemas__title title">{{ $t('cinemas.title') }}</h2>
    <div class="cinemas__items">
      <div class="cinemas__item" v-for="item in cinemas" :key="item.id">
        <router-link :to="'/cinemas/' + item.id">
          <img :src="item.img" alt="">
          <p class="cinemas__name">{{ item.title }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {onValue, ref} from "firebase/database";
import db from "../../../firebase/database";

export default {
  name: "CinemasUser",
  mounted() {
    this.setupCinemas()
  },
  watch: {
    '$i18n.locale'() {
      this.setupCinemas()
    }
  },
  data() {
    return {
      cinemas: {}
    }
  },
  methods: {
    async setupCinemas() {
      const cinemasRef = await ref(db, 'cinemas')
      await onValue(cinemasRef, (snapshot) => {
        this.cinemas = snapshot.val()
      })
      if(this.$i18n.locale === 'ua') {
        Object.keys(this.cinemas).forEach((element) => {
          this.cinemas[element] = this.cinemas[element].ua
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cinemas__items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 90%;
  margin: 0 auto;
}
.cinemas__item {
  margin-top: 20px;
  img {
    height: 520px;
    width: 520px;
  }
}
.cinemas__name {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-top: 5px;
}
</style>