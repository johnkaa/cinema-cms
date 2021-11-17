<template>
  <div class="banners">
    <banners-top />
    <banners-banner />
    <banners-sales />
  </div>
</template>

<script>
import BannersTop from "../../components/Banners/BannersTop";
import BannersBanner from "../../components/Banners/BannersBanner";
import BannersSales from "../../components/Banners/BannersSales";

export default {
  name: "Banners",
  components: {
    BannersTop,
    BannersBanner,
    BannersSales
  },
}
</script>

<style scoped>
.banners {
  padding-bottom: 50px;
}
</style>