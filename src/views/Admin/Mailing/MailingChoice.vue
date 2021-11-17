<template>
  <div class="users">
    <h2 class="users__title title">Пользователи</h2>
    <form class="search"><input type="text" placeholder="Поиск" v-model="search"/><my-button>Поиск</my-button></form>
    <table class="iksweb">
      <tr class="users__main" style="background-color: #42b983;">
        <td class="users__main-item">ID</td>
        <td class="users__main-item">Дата Регистрации</td>
        <td class="users__main-item">День рождения</td>
        <td class="users__main-item">Email</td>
        <td class="users__main-item">Телефон</td>
        <td class="users__main-item">Фио</td>
        <td class="users__main-item">Псевдоним</td>
        <td class="users__main-item">Город</td>
      </tr>
      <tr>
        <td>2104</td>
        <td>12.10.2015</td>
        <td>12.10.1985</td>
        <td>ivan@mail.ru</td>
        <td>78542154854</td>
        <td>Иван Герасимов</td>
        <td>Молния</td>
        <td>Москва</td>
        <my-edit />
        <my-delete />
      </tr>
      <tr>
        <td>2104</td>
        <td>12.10.2015</td>
        <td>12.10.1985</td>
        <td>ivan@mail.ru</td>
        <td>78542154854</td>
        <td>Иван Герасимов</td>
        <td>Молния</td>
        <td>Москва</td>
        <my-edit />
        <my-delete />
      </tr>
      <tr>
        <td>2104</td>
        <td>12.10.2015</td>
        <td>12.10.1985</td>
        <td>ivan@mail.ru</td>
        <td>78542154854</td>
        <td>Иван Герасимов</td>
        <td>Молния</td>
        <td>Москва</td>
        <my-edit />
        <my-delete />
      </tr>
      <tr>
        <td>2104</td>
        <td>12.10.2015</td>
        <td>12.10.1985</td>
        <td>ivan@mail.ru</td>
        <td>78542154854</td>
        <td>Иван Герасимов</td>
        <td>Молния</td>
        <td>Москва</td>
        <my-edit />
        <my-delete />
      </tr>
      <tr>
        <td>2104</td>
        <td>12.10.2015</td>
        <td>12.10.1985</td>
        <td>ivan@mail.ru</td>
        <td>78542154854</td>
        <td>Иван Герасимов</td>
        <td>Молния</td>
        <td>Москва</td>
        <my-edit />
        <my-delete />
      </tr>
    </table>
    <div class="users__pages">
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
    </div>
  </div>
</template>

<script>
import MyEdit from "../../../components/UI/MyEdit";
import MyDelete from "../../../components/UI/MyDelete";
import MyButton from "../../../components/UI/MyButton";
export default {
  name: "MailingChoice",
  components: {MyButton, MyDelete, MyEdit}
}
</script>

<style scoped>

</style>