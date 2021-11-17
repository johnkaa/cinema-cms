<template>
  <div class="mailing">
    <MailingSMS />
    <MailingEmail />
  </div>
</template>

<script>
import MailingSMS from "../../../components/Mailing/MailingSMS";
import MailingEmail from "../../../components/Mailing/MailingEmail";
export default {
  name: "Mailing",
  components: {MailingEmail, MailingSMS}
}
</script>

<style scoped>
.mailing {
  padding-bottom: 50px;
}
</style>