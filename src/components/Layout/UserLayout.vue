<template>
  <div>
    <user-header class="header"/>
    <router-view />
    <Footer class="footer" v-if="this.$route.name !== 'Cabinet'"/>
  </div>
</template>

<script>
import UserHeader from "../UserHeader";
import Footer from "../Footer";
import {mapMutations} from "vuex";

export default {
  name: "UserLayout",
  components: {
    Footer,
    UserHeader
  },
  mounted() {
    this.getUser()
  },
  updated() {
    this.getUser()
  },
  methods: {
    ...mapMutations(['getUser'])
  }
}
</script>

<style scoped>
.header {
  margin: 0;
}
.footer {
  margin: 0;
}
</style>