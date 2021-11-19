<template>
  <div class="contacts">
    <h2 class="contacts__title">{{ $t('contacts.title') }}</h2>
    <div class="contacts__items">
      <div class="contacts__item" v-for="item in contacts" :key="item.id">
        <div class="contacts__item-inner">
          <div class="contacts__item-main">
            <div class="contacts__item-title">{{ item.name }}</div>
            <div class="contacts__item-img"><img :src="item.img" alt=""></div>
          </div>
          <div class="contacts__item-info">
            <div class="contacts__item-address">{{ item.address }}</div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.0962405740197!2d-122.35525182843425!3d47.624260456178064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549015414ff8157b%3A0x2a0846e5f98ff51d!2z0KDQtdC_0LXRgNGC0YPQsNGA0L3Ri9C5INGC0LXQsNGC0YAg0KHQuNGN0YLQu9Cw!5e0!3m2!1sru!2sua!4v1635946798721!5m2!1sru!2sua" width="500" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {onValue, ref} from "firebase/database";
import db from "../../../firebase/database";

export default {
  name: "Contacts",
  mounted() {
    this.setupContacts()
  },
  watch: {
    '$i18n.locale'() {
      this.setupContacts()
    }
  },
  data() {
    return {
      contacts: {}
    }
  },
  methods: {
    async setupContacts() {
      if(this.$i18n.locale === 'ua') {
        const contactsRef = await ref(db, 'pages/2/ua/contacts')
        await onValue(contactsRef, (snapshot) => {
          this.contacts = snapshot.val()
        })
      } else {
        const contactsRef = await ref(db, 'pages/2/contacts')
        await onValue(contactsRef, (snapshot) => {
          this.contacts = snapshot.val()
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.contacts {
  padding: 50px 0;
}
.contacts__title {
  font-size: 30px;
  text-align: center;
}
.contacts__item {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  & + & {
    margin-top: 30px;
  }
  &-inner {
    display: flex;
  }
  &-info {
    margin-left: 50px;
  }
  &-title, &-address {
    font-size: 20px;
  }
  &-img img {
    width: 500px;
    height: 500px;
  }
}
</style>